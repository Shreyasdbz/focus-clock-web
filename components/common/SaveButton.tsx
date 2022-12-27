interface ISaveButton {
  onClickHandler: () => void;
}
const SaveButton = (props: ISaveButton) => {
  return (
    <button
      onClick={props.onClickHandler}
      className="text-md font-normal font-outfit bg-black border-2 border-black text-white rounded-lg shadow-md w-24 h-9 hover:bg-white hover:text-black">
      Save
    </button>
  );
};

export default SaveButton;
