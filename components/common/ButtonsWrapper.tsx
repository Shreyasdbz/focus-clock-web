import { IWrapperProps } from "../../models/general";

const ButtonsWrapper = (props: IWrapperProps) => {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-4">
      {props.children}
    </div>
  );
};

export default ButtonsWrapper;
