import { ChevronRightIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

interface ISectionHeader {
  text: string;
  hasButton: boolean;
  buttonType?: "ADD" | "HIDE_SHOW_TOGGLE";
  onButtonClick?: () => void;
  isShowingContent?: boolean;
}
const SectionHeader = (props: ISectionHeader) => {
  return (
    <div className="w-full flex items-center justify-between my-2">
      <span className="text-xl md:text-2xl font-semibold font-outfit">
        {props.text}
      </span>
      {props.hasButton && (
        <button
          className="rounded-lg px-2 py-1 bg-slate-300 border-2 border-slate-300 shadow-lg hover:border-slate-600 w-24"
          onClick={props.onButtonClick}>
          <div className="flex flex-row items-center justify-center gap-2">
            {props.buttonType === "ADD" && (
              <>
                <span className="font-outfit font-semibold text-md md:text-lg text-slate-700">
                  Add
                </span>
                <PlusCircleIcon className="fill-slate-600 w-6 h-6" />
              </>
            )}
            {props.buttonType === "HIDE_SHOW_TOGGLE" && (
              <>
                <span className="font-outfit font-semibold text-md md:text-lg text-slate-700">
                  {props.isShowingContent ? "Hide" : "Show"}
                </span>
                <ChevronRightIcon
                  className={
                    props.isShowingContent
                      ? "fill-slate-600 w-6 h-6 rotate-90"
                      : "fill-slate-600 w-6 h-6"
                  }
                />
              </>
            )}
          </div>
        </button>
      )}
    </div>
  );
};
export default SectionHeader;
