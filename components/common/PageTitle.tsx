/** @format */

interface IPageTitle {
  text: string;
}
const PageTitle = ({ text }: IPageTitle) => {
  return (
    <div className="w-full flex items-center justify-start my-2">
      <span className="text-2xl md:text-3xl font-semibold font-outfit">
        {text}
      </span>
    </div>
  );
};

export default PageTitle;
