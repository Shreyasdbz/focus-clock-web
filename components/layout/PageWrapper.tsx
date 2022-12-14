/** @format */

import { IWrapperProps } from "../../models/general";

import NavBar from "./NavBar";

const PageWrapper = ({ children }: IWrapperProps) => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center overflow-x-hidden overflow-y-scroll relative">
      {/* <BackgroundShapes /> */}
      <NavBar />
      <div className="w-full h-full flex flex-col items-center justify-start relative max-w-6xl px-4 mt-8">
        {children}
      </div>
    </main>
  );
};

const BackgroundShapes = () => {
  return (
    <div className="fixed -z-50 flex flex-col items-center justify-center w-full h-full">
      <div className="w-bg-circle h-bg-circle lg:w-bg-circle-lg lg:h-bg-circle-lg left-24 top-10 relative blob-1 opacity-60" />
      <div className="w-bg-circle h-bg-circle lg:w-bg-circle-lg lg:h-bg-circle-lg left-24 top-10 relative blob-2 opacity-60" />
      <div className="w-bg-circle h-bg-circle lg:w-bg-circle-lg lg:h-bg-circle-lg left-24 top-10 relative blob-3 opacity-60" />
    </div>
  );
};

export default PageWrapper;
