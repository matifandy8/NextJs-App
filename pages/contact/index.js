import Head from "next/head";
import Nav from "../../components/nav";
import styles from "../../styles/Home.module.css";

export default function Contact() {
  return (
    <Container>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Contact</a>
        </h1>

        <p className={styles.description}></p>

        <div className={styles.grid}></div>
      </main>
      <footer className={styles.footer}>
        <a>Powered by Matias Fandiño</a>
      </footer>
    </Container>
  );
}
