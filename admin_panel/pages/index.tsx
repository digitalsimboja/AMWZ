// index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import MetricCard from "../components/MetricCard";
import BarChart from "../components/BarChart";
import RecentOrders from "../components/RecentOrders";

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
          <MetricCard />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
            <BarChart />
            <RecentOrders />
          </div>
        </main>
      </div>
    </>
  )
}

export default Home;
