import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>PetEmergency</a>
      </Link>
      <div className={styles.navbarLinks}>about us</div>
    </div>
  );
}
