import styles from '../styles/Home.module.css';
import Image from 'next/image';
import planet from '../public/location-request.svg';

export default function EnableLocation({ getGeoLocation }) {
  return (
    <div className={styles.locationCard}>
      <div className={styles.cardLeft}>
        {/* svg from undraw.org */}
        <Image src={planet} alt="planet" />
      </div>
      <div className={styles.cardRight}>
        <strong>Location Service</strong>
        <span className={styles.subtext}>
          This service requires your location to find nearby emergency pet
          hospitals.
        </span>
        <button
          type="button"
          className={styles.getLocationButton}
          onClick={getGeoLocation}
        >
          Enable location
        </button>
      </div>
    </div>
  );
}
