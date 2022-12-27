interface IInputCaptionText {
  text: string;
}
const InputCaptionText = (props: IInputCaptionText) => {
  return (
    <div className="w-full flex items-center justify-start">
      <span className="text-md font-light text-slate-700">{props.text}</span>
    </div>
  );
};

export default InputCaptionText;
