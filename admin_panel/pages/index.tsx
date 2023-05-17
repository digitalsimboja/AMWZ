import type { NextPage } from "next";
import Head from "next/head";
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

        <main className="min-h-screen">
          <div>Welcome</div>
        </main>
      </div>
    </>
  );
};

export default Home;
