import styles from '../styles/Home.module.css';
import Image from 'next/image';
// import instructionGif from '../public/cpr-instructions/cpr-1.gif';
import instructionGif from '../public/cpr-instructions/cpr-original.gif';

export default function Instructions() {
  return (
    <section className={styles.instructions}>
      <h3 style={{ width: '200px' }}>Choking and CPR</h3>
      <div className={styles.instructionCard}>
        <Image
          src={instructionGif}
          alt="cat"
          className={styles.instructionGif}
        />
      </div>
    </section>
  );
}
