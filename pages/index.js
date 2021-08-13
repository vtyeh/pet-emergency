import styles from "../styles/Home.module.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Instructions from "../components/Instructions";
import NearestHospitals from "../components/NearestHospitals";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PetEmergency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <h2>
        Keep <span style={{ color: "#237ae1" }}>calm</span>. We are here to
        help.
      </h2>

      <main className={styles.main}>
        <Instructions />
        <NearestHospitals />
      </main>

      <footer className={styles.footer}>
        Created with and by LOVE. Powered by Taiwanese tea. Copyright © 2021.
        <br />
        In loving memory of Kimchi 🧡
      </footer>
    </div>
  );
}
