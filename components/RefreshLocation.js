import styles from '../styles/Home.module.css';

export default function RefreshLocation({ getGeoLocation }) {
  return (
    <>
      <button
        type="button"
        className={styles.refreshButton}
        onClick={getGeoLocation}
      >
        <i className="fa fa-refresh"></i>
      </button>
    </>
  );
}
