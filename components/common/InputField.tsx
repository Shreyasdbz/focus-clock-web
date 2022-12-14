interface IInputField {
  type: "text" | "number";
  content: string | number;
  placeholder?: string | number;
  onChange: () => void;
  size: "SMALL" | "MEDIUM" | "LARGE";
}
const InputField = (props: IInputField) => {
  return <input />;
};

export default InputField;
