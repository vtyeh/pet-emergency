import styles from '../styles/Home.module.css';
import Image from 'next/image';
import instructionGif from '../public/cpr-instructions/gif-test.gif';

export default function Instructions() {
  return (
    <section className={styles.instructions}>
      <h3>Choking and CPR</h3>
      {/* <Image src={instructionGif} alt="cat" className={styles.instructionGif} /> */}
      <div className={styles.instructionCard}>
        <Image
          src={instructionGif}
          alt="cat"
          className={styles.instructionGif}
        />

        {/* <img
          src="/cpr-instructions/CPR-Cats-and-Dogs-1.gif"
          alt="instruction gif"
          className={styles.instructionGif}
        /> */}
      </div>
    </section>
  );
}
