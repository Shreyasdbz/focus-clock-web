/** @format */

import Head from "next/head";

import PageWrapper from "../components/layout/PageWrapper";
import Clock from "../components/feature/clock/Clock";

export default function Home() {
  return (
    <>
      <Head>
        <title>Focus Clock</title>
        <meta name="description" content="Clock to help you focus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Clock />

      <footer></footer>
    </>
  );
}
