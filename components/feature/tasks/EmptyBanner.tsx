interface IEmptyBanner {
  type: "tag" | "task";
}
const EmptyBanner = (props: IEmptyBanner) => {
  return (
    <div className="w-full flex items-center justify-center">
      <span className="text-lg font-light text-slate-600 my-8">
        Use the +ADD button to add a new {props.type}
      </span>
    </div>
  );
};

export default EmptyBanner;
