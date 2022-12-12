/** @format */

import Head from "next/head";

import PageWrapper from "../components/layout/PageWrapper";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Focus Clock</title>
        <meta name="description" content="Clock to help you focus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <h1>Clock</h1>
      </PageWrapper>

      <footer></footer>
    </div>
  );
}
