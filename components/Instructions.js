import styles from "../styles/Home.module.css";
import Image from "next/image";
import cat from "../public/cat.svg";

export default function Instructions() {
  return (
    <section className={styles.instructions}>
      {/* <h3>Choking and CPR</h3> */}
      <Image src={cat} alt="cat" />
    </section>
  );
}
