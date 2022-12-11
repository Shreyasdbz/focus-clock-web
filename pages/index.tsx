/** @format */

import Head from "next/head";

import PageWrapper from "../components/layout/PageWrapper";
import NavBar from "../components/layout/NavBar";
import Clock from "../components/feature/clock/clock";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Focus Clock</title>
        <meta name="description" content="Clock to help you focus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <NavBar />
        <Clock />
      </PageWrapper>

      <footer></footer>
    </div>
  );
}
