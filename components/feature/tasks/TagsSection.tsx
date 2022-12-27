import { useUiContext } from "../../../context/UiContext";
import { useDataContext } from "../../../context/DataContext";

import { ModalTypes } from "../../../models/Ui";
import SectionCaption from "../../common/SectionCaption";
import SectionHeader from "../../common/SectionHeader";

import EmptyBanner from "./EmptyBanner";
import TagItem from "./TagItem";

const TagsSection = () => {
  const { triggerModal } = useUiContext();
  const { cachedTagsList } = useDataContext();

  function handleAddButtonClick() {
    triggerModal(ModalTypes.NewTag);
  }

  function handleTagItemClick(tagId: string) {
    //
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
      {cachedTagsList && cachedTagsList.length > 0 ? (
        <div className="w-full flex flex-wrap items-center justify-center gap-4 my-8">
          {cachedTagsList.map((tag) => {
            return (
              <TagItem
                key={tag.id}
                tag={tag}
                onClickHandler={handleTagItemClick}
              />
            );
          })}
        </div>
      ) : (
        <EmptyBanner type="tag" />
      )}
    </>
  );
};

export default TagsSection;
