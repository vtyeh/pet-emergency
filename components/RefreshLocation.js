import styles from "../styles/Home.module.css";

export default function RefreshLocation({ getGeoLocation }) {
  return (
    <>
      <button
        type="button"
        className={styles.refreshButton}
        onClick={getGeoLocation}
      >
        Refresh location
      </button>
    </>
  );
}
