// index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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

        <main className="min-h-screen flex">
          <Sidebar />
          <div className="ml-20 p-8 w-full z-10 bg-white rounded-l-[40px] overflow-hidden">
            <Header />
            {/* Content Goes Here */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
