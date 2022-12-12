/** @format */

import "../styles/main.scss";
import type { AppProps } from "next/app";

import { NavContextProvier } from "../context/NavContext";
import { UserContextProvider } from "../context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvier>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </NavContextProvier>
  );
}
