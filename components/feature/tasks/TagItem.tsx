import { ITag } from "../../../models/Tasks";

interface ITagItem {
  tag: ITag;
  onClickHandler: (tagId: string) => void;
}
const TagItem = (props: ITagItem) => {
  return (
    <button
      className={`px-4 py-2 font-normal text-lg rounded-lg text-white ${props.tag.themeId} shadow-lg`}>
      {props.tag.description}
    </button>
  );
};

export default TagItem;
