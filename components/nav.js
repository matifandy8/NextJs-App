import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </>
  );
}
