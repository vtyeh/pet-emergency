import Skeleton from 'react-loading-skeleton';
import styles from '../styles/Home.module.css';

export default function Hospitals({ data, index }) {
  // console.log('I AM YOUR DATA', data);

  const metersToMiles = (meters) => {
    return Math.round((meters / 1609.34) * 100) / 100;
  };

  const getOpenTime = (openHours, name) => {
    // find time and day right now
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 6
    // yelp day is 0 index
    const currentHour = currentDate.getHours();
    const currentMin = currentDate.getMinutes();

    function formatAMPM(hours, minutes) {
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    for (let i = 0; i < openHours.length; i++) {
      const hours = openHours[i];
      if (hours.day + 1 === currentDay) {
        const openTime = hours.start;
        const closeTime = hours.end;
        const openHour = Number(hours.start.substring(0, 2));
        const openMin = Number(hours.start.substring(2, 4));
        const closeHour = Number(hours.end.substring(0, 2));
        const closeMin = Number(hours.end.substring(2, 4));

        // console.log({ name, openHour, openMin });

        if (openTime === closeTime) {
          return 'open 24 hours';
        } else if (currentHour > openHour) {
          const closesAt = formatAMPM(closeHour, closeMin);
          return 'closes at ' + closesAt;
        } else if (currentHour < openHour) {
          const opensAt = formatAMPM(openHour, openMin);
          return 'opens at ' + opensAt;
        }
      }
    }
  };

  const handleCopy = (text) => {
    // copy clicked text to clipboard
    navigator.clipboard.writeText(text);
  };

  const handleNavigateButton = (address) => {
    const baseGoogleMapsURL = 'https://www.google.com/maps/place/';
    const addressParams = address.replace(/\s/g, '+').replace(',', '');
    const destinationURL = baseGoogleMapsURL + addressParams;
    // open hospital address in google maps on new tab
    window.open(destinationURL, '_blank');
  };

  return (
    <>
      <div className={styles.hospitalCard}>
        {/* left of card */}
        <div className={styles.cardLeft}>
          {(data.distance && (
            <div className={styles.miles}>
              {metersToMiles(data.distance)} mi
            </div>
          )) || <Skeleton width={40} />}
          {(data.rating && (
            <div className={styles.rating}>⭐ {data.rating}</div>
          )) || <Skeleton width={40} />}
        </div>
        {/* right of card */}
        <div className={styles.cardRight}>
          <div className={styles.hospitalName}>
            {data.name && <span>{index + 1}.</span>}{' '}
            {data.name || <Skeleton height={20} />}
          </div>
          <div className={styles.subtext}>
            {(data.location && data.location.formatted_address) || (
              <Skeleton count={3} />
            )}{' '}
          </div>
          <div className={styles.businessInfo}>
            {data.display_phone}{' '}
            <span style={{ color: 'green' }}>
              {data.hours && getOpenTime(data.hours[0].open, data.name)}
            </span>
          </div>
          {Object.keys(data).length != 0 && (
            <div className={styles.buttons}>
              <button
                className={styles.darkButton}
                onClick={() =>
                  handleNavigateButton(data.location.formatted_address)
                }
              >
                Navigate
              </button>
              <button
                className={styles.lightButton}
                onClick={() => handleCopy(data.location.formatted_address)}
              >
                Copy
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
