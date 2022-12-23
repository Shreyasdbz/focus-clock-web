interface ICancelButton {
  onClickHandler: () => void;
}
const CancelButton = (props: ICancelButton) => {
  return (
    <button
      onClick={props.onClickHandler}
      className="text-md font-normal font-outfit bg-slate-300 border-2 border-slate-300 text-black rounded-lg shadow-md w-24 h-9">
      Cancel
    </button>
  );
};

export default CancelButton;
