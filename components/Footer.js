import styles from "../styles/Home.module.css";

export default function Footer() {
  // TODO: update this before deploying
  const lastEditDate = "8-17-2021";
  return (
    <footer className={styles.footer}>
      Last edited on {lastEditDate}.
      <br />
      Created with and by LOVE. Powered by Taiwanese tea. Copyright © 2021.
      <br />
      In loving memory of Kimchi 🧡
    </footer>
  );
}
