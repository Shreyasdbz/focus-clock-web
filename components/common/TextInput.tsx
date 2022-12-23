import { ChangeEvent } from "react";

interface ITextInput {
  value: string;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  messageOnError: string;
  onSubmit: () => void;
}
const TextInput = (props: ITextInput) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <input
        type="text"
        value={props.value}
        onChange={(e) => {
          props.onValueChange(e);
        }}
        className="w-full bg-slate-200 shadow-sm rounded-md text-lg font-light text-center px-2 py-1 border-2 border-slate-200 hover:border-slate-400 tracking-wider"
      />
      {
        <div className="h-8">
          <span className="font-mono text-red-500 text-sm tracking-tight">
            {props.messageOnError}
          </span>
        </div>
      }
    </div>
  );
};

export default TextInput;
