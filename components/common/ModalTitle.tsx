interface IModalTitle {
  text: string;
}
const ModalTitle = (props: IModalTitle) => {
  return (
    <div className="w-full flex items-center justify-center my-4">
      <span className="text-lg font-semibold font-outfit">{props.text}</span>
    </div>
  );
};

export default ModalTitle;
