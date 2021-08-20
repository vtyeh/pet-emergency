import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.company}>
        <div className={styles.logo}>
          <Image
            // className={styles.logo}
            src={logo}
            alt="logo"
            width="20"
            height="20"
          />
        </div>
        <div className={styles.name}></div>
        <Link href="/">
          <a>PetEmergency</a>
        </Link>
      </div>

      <div className={styles.navbarLinks}>
        <Link href="/about">
          <a>about us</a>
        </Link>
      </div>
    </div>
  );
}
