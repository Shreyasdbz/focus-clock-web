import { ModalTypes } from "../../../models/Ui";

import { useUiContext } from "../../../context/UiContext";

const NewTaskModal = () => {
  const { currentActiveModal } = useUiContext();

  // Guard
  if (currentActiveModal !== ModalTypes.NewTask) {
    return <></>;
  }

  return (
    <div>
      <div>
        <button>{/*  */}</button>
      </div>
    </div>
  );
};

export default NewTaskModal;
