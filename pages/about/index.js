import Head from "next/head";
import Container from "../../components/Container";
import Nav from "../../components/nav";
import styles from "../../styles/Home.module.css";

export default function About({ name }) {
  return (
    <Container>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>About</a>
          <br />
          My name is {name}
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

About.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      return response;
    });
};
