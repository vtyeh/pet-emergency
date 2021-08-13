import { useRouter } from "next/router";
import Image from "next/Image";
import styles from "../styles/Home.module.css";
import planet from "../public/location-request.svg";

export default function NearestHospitals() {
  const router = useRouter();

  const getCoordinates = (position) => {
    router.push({
      pathname: "/hospital-near",
      query: { lat: position.coords.latitude, long: position.coords.longitude },
    });
  };

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <section className={styles.nearestHospitals}>
      <h3>Nearest emergency pet hospitals</h3>
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
    </section>
  );
}
