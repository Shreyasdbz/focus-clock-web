import { useUiContext } from "../../../context/UiContext";

import { ModalTypes } from "../../../models/Ui";

import NewTagModal from "./NewTagModal";

const TasksModalController = () => {
  const { currentActiveModal } = useUiContext();

  return <>{currentActiveModal === ModalTypes.NewTag && <NewTagModal />}</>;
};

export default TasksModalController;
