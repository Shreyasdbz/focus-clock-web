/** @format */

interface IPageWrapperProps {
  children: React.ReactElement | React.ReactElement[];
}
const PageWrapper = ({ children }: IPageWrapperProps) => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center relative max-w-6xl">
      {/* <div></div> */}
      {children}
    </main>
  );
};

export default PageWrapper;
