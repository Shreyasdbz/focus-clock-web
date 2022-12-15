import { useUiContext } from "../../../context/UiContext";

import { ModalTypes } from "../../../models/Ui";
import SectionCaption from "../../common/SectionCaption";
import SectionHeader from "../../common/SectionHeader";

const TagsSection = () => {
  const { triggerModal } = useUiContext();
  function handleAddButtonClick() {
    triggerModal(ModalTypes.NewTag);
  }

  return (
    <>
      <SectionHeader
        text="Tags"
        hasButton={true}
        buttonType="ADD"
        onButtonClick={handleAddButtonClick}
      />
      <SectionCaption
        text={"Create and manage tags for different projects or categories"}
      />
      <div>
        <span>TAGS TAGS TAGS</span>
      </div>
    </>
  );
};

export default TagsSection;
