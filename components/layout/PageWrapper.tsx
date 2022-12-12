/** @format */

import NavBar from "./NavBar";

interface IPageWrapperProps {
  children: React.ReactElement | React.ReactElement[];
}
const PageWrapper = ({ children }: IPageWrapperProps) => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-start relative max-w-6xl">
        <NavBar />
        {children}
      </div>
    </main>
  );
};

export default PageWrapper;
