import { GradientThemes } from "../../../models/Theme";

import { convertThemeCssToEnum } from "../../../utils/themeUtils";

import InputCaptionText from "../../common/InputCaptionText";

interface IThemePicker {
  selection: GradientThemes | null;
  onClickHandler: (themeId: GradientThemes) => void;
}
const ThemePicker = (props: IThemePicker) => {
  const themeKeys = Object.keys(GradientThemes).filter((t) => isNaN(Number(t)));

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <InputCaptionText text="TAG THEME" />
      <div className="w-full flex flex-row items-center justify-start mb-8 gap-4 border-2 overflow-x-scroll">
        {themeKeys.map((t) => {
          let isSelected = t === String(props.selection);
          return (
            <button
              key={themeKeys.indexOf(t)}
              onClick={() => {
                props.onClickHandler(convertThemeCssToEnum(t));
              }}
              className={`w-14 h-14 rounded-full ${t} ${
                isSelected ? "border-4 border-white" : ""
              } hover:animate-spin`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThemePicker;
