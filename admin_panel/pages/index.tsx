// index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>AMWZ Admin Panel</title>
          <meta name="description" content="AMWZ admin panel" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header />
        </main>
      </div>
    </>
  )
}

export default Home;
