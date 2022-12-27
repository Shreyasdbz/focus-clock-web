interface ICancelButton {
  onClickHandler: () => void;
}
const CancelButton = (props: ICancelButton) => {
  return (
    <button
      onClick={props.onClickHandler}
      className="text-md font-normal font-outfit bg-slate-300 border-2 border-slate-300 text-slate-700 rounded-lg shadow-md w-24 h-9 hover:bg-white">
      Cancel
    </button>
  );
};

export default CancelButton;
