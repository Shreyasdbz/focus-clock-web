/** @format */

interface IPageTitle {
  text: string;
}
const PageTitle = (props: IPageTitle) => {
  return (
    <div className="w-full flex items-center justify-center my-2">
      <span className="text-2xl md:text-3xl font-semibold font-outfit">
        {props.text}
      </span>
    </div>
  );
};

export default PageTitle;
