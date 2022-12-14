import { TimerSizes } from "../../../models/Timer";
import SectionCaption from "../../common/SectionCaption";
import SectionHeader from "../../common/SectionHeader";

const TimerRanges = () => {
  function handleValueChange(size: TimerSizes, newValue: number | string) {
    //
  }

  function getTimerSizeRow(size: TimerSizes, text: string) {
    return (
      <div className="w-full max-w-sm flex flex-row items-center justify-between">
        <span className="font-normal text-lg">{text}:</span>
        <div className="flex flex-row items-center justify-center gap-2">
          <input
            type="number"
            min={0}
            max={999}
            className="w-20 bg-slate-200 shadow-sm rounded-md text-lg font-semibold text-center px-2 py-1 border-2 border-slate-200 hover:border-slate-400"
            onChange={(e) => {
              handleValueChange(size, e.target.value);
            }}
          />
          <span className="font-normal text-lg">mins</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <SectionHeader text={"Timer Sizes"} hasButton={false} />
      <SectionCaption text={"Set your own custom timer sizes"} />
      <div className="w-full flex flex-col items-start justify-center lg:items-center gap-2">
        {getTimerSizeRow(TimerSizes.Tiny, "Tiny")}
        {getTimerSizeRow(TimerSizes.Small, "Small")}
        {getTimerSizeRow(TimerSizes.Medium, "Medium")}
        {getTimerSizeRow(TimerSizes.Large, "Large")}
        {getTimerSizeRow(TimerSizes.Huge, "Huge")}
      </div>
    </>
  );
};

export default TimerRanges;
