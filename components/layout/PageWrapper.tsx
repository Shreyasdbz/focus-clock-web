/** @format */

import { useUiContext } from "../../context/UiContext";
import { IWrapperProps } from "../../models/general";

import NavBar from "./NavBar";

const PageWrapper = (props: IWrapperProps) => {
  const { pageBlurActive } = useUiContext();
  return (
    <main
      className={`w-screen h-screen flex flex-col items-center justify-center overflow-x-hidden overflow-y-scroll relative z-0 ${
        pageBlurActive ? "blur-md" : "filter-none"
      }`}>
      <NavBar />
      <div className="w-full h-full flex flex-col items-center justify-start relative max-w-6xl px-4 mt-12">
        {props.children}
      </div>
    </main>
  );
};

export default PageWrapper;
