interface ISectionCaption {
  text: string;
}
const SectionCaption = (props: ISectionCaption) => {
  return (
    <div className="w-full flex items-center justify-start">
      <span className="text-lg font-light">{props.text}</span>
    </div>
  );
};

export default SectionCaption;
