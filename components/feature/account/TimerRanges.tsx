import { useState } from "react";
import {
  TimerSizes,
  DEFAULT_TIMER_SIZES_IN_MINUTES,
} from "../../../models/Timer";
import { useUserContext } from "../../../context/UserContext";
import SectionCaption from "../../common/SectionCaption";
import SectionHeader from "../../common/SectionHeader";

const TimerRanges = () => {
  const { userProfile } = useUserContext();
  const [tinyMinutes, setTinyMinutes] = useState<number>(
    userProfile?.timerSizesInMinutes.tiny || DEFAULT_TIMER_SIZES_IN_MINUTES.tiny
  );
  const [smallMinutes, setSmallMinutes] = useState<number>(
    userProfile?.timerSizesInMinutes.small ||
      DEFAULT_TIMER_SIZES_IN_MINUTES.small
  );
  const [mediumMinutes, setMediumMinutes] = useState<number>(
    userProfile?.timerSizesInMinutes.medium ||
      DEFAULT_TIMER_SIZES_IN_MINUTES.medium
  );
  const [largeMinutes, setLargeMinutes] = useState<number>(
    userProfile?.timerSizesInMinutes.large ||
      DEFAULT_TIMER_SIZES_IN_MINUTES.large
  );
  const [hugeMinutes, setHugeMinutes] = useState<number>(
    userProfile?.timerSizesInMinutes.huge || DEFAULT_TIMER_SIZES_IN_MINUTES.huge
  );

  function handleValueGet(size: TimerSizes): number {
    switch (size) {
      case TimerSizes.Tiny:
        return tinyMinutes;
      case TimerSizes.Small:
        return smallMinutes;
      case TimerSizes.Medium:
        return mediumMinutes;
      case TimerSizes.Large:
        return largeMinutes;
      case TimerSizes.Huge:
        return hugeMinutes;
      default:
        return mediumMinutes;
    }
  }

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
            defaultValue={handleValueGet(size)}
            className="w-20 bg-slate-200 shadow-sm rounded-md text-lg font-semibold text-center px-2 py-1 border-2 border-slate-200 hover:border-slate-400"
            onChange={(e) => {
              handleValueChange(size, e.target.value);
            }}
          />
          <span className="font-normal text-sm self-end">min</span>
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
