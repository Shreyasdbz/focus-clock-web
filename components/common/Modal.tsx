/** @format */

import { useEffect } from "react";
import { IWrapperProps } from "../../models/general";
import { useUiContext } from "../../context/UiContext";

const Modal = (props: IWrapperProps) => {
  const { dismissAllModals } = useUiContext();

  const KEY_NAME_ESC = "Escape";
  const KEY_EVENT_TYPE = "keyup";

  function handleKey({ key }: any) {
    if (key === KEY_NAME_ESC) {
      dismissAllModals();
    }
  }

  useEffect(() => {
    window.addEventListener(KEY_EVENT_TYPE, handleKey);
    return () => {
      window.removeEventListener(KEY_EVENT_TYPE, handleKey);
    };
  });

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-start fixed z-30 overflow-y-scroll"
      onClick={() => {
        dismissAllModals();
      }}>
      <div
        className="bg-white px-8 py-14 mt-20 rounded-md shadow-md w-80 md:w-96 lg:w-128"
        onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
      {/* spacer */}
      <div className="w-full h-2 my-12" />
    </div>
  );
};

export default Modal;
