/** @format */

import "../styles/main.scss";
import type { AppProps } from "next/app";

import { NavContextProvier } from "../context/NavContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvier>
      <Component {...pageProps} />
    </NavContextProvier>
  );
}
