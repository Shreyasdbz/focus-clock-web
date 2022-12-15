/** @format */

import "../styles/main.scss";
import type { AppProps } from "next/app";

import { UiContextProvier } from "../context/UiContext";
import { UserContextProvider } from "../context/UserContext";
import { DataContextProvider } from "../context/DataContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataContextProvider>
      <UiContextProvier>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </UiContextProvier>
    </DataContextProvider>
  );
}
