import styles from "../styles/Home.module.css";

export default function Hospitals({ data, error }) {
  console.log("I AM YOUR DATA", data);

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
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }

    for (let i = 0; i < openHours.length; i++) {
      const hours = openHours[i];
      if (hours.day + 1 === currentDay) {
        const openTime = hours.start;
        const closeTime = hours.end;
        const openHour = Number(hours.start.substring(0, 2));
        const openMin = Number(hours.start.substring(2, 4));
        const closeHour = Number(hours.start.substring(0, 2));
        const closeMin = Number(hours.start.substring(2, 4));

        console.log({ name, openHour, openMin });

        if (openTime === closeTime) {
          return "open 24 hours";
        } else if (currentHour > openHour) {
          const closesAt = formatAMPM(closeHour, closeMin);
          return "closes at " + closesAt;
        } else if (currentHour < openHour) {
          const opensAt = formatAMPM(openHour, openMin);
          return "opens at " + opensAt;
        }
      }
    }
  };

  const handleCopy = (text) => {
    // copy clicked text to clipboard
    navigator.clipboard.writeText(text);
  };

  const handleNavigateButton = (address) => {
    const baseGoogleMapsURL = "https://www.google.com/maps/place/";
    const addressParams = address.replace(/\s/g, "+").replace(",", "");
    const destinationURL = baseGoogleMapsURL + addressParams;
    // open hospital address in google maps on new tab
    window.open(destinationURL, "_blank");
  };

  return (
    <div>
      {data &&
        data.map(
          (
            { id, name, rating, distance, display_phone, location, hours },
            index
          ) => (
            <div key={id} className={styles.hospitalCard}>
              {/* left of card */}
              <div className={styles.cardLeft}>
                <div className={styles.miles}>{metersToMiles(distance)} mi</div>
                <div className={styles.rating}>⭐ {rating}</div>
              </div>
              {/* right of card */}
              <div className={styles.cardRight}>
                <div className={styles.hospitalName}>
                  {index + 1}. {name}
                </div>
                <div className={styles.subtext}>
                  {location.formatted_address}{" "}
                </div>
                <div className={styles.businessInfo}>
                  {display_phone}{" "}
                  <span style={{ color: "green" }}>
                    {getOpenTime(hours[0].open, name)}
                  </span>
                </div>
                <div className={styles.buttons}>
                  <button
                    className={styles.darkButton}
                    onClick={() =>
                      handleNavigateButton(location.formatted_address)
                    }
                  >
                    Navigate
                  </button>
                  <button
                    className={styles.lightButton}
                    onClick={() => handleCopy(location.formatted_address)}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
}
