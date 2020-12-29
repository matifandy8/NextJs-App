import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "./nav";

export default function Container(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>{props.children}</div>
    </div>
  );
}
