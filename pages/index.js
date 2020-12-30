import Head from "next/head";
import Container from "../components/Container";
import styles from "../styles/Home.module.css";
import Users from "../components/Users";

export default function Home(props) {
  return (
    <Container>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Home</a>
        </h1>

        <div className={styles.grid}>
          {/* {props.users[0].id} */}
          <Users users={props.users} />
        </div>
      </main>
      <footer className={styles.footer}>
        <a>Powered by Matias Fandiño</a>
      </footer>
    </Container>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return {
    users: resJSON.data,
  };
};
