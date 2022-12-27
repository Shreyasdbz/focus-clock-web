import { useDataContext } from "../../../context/DataContext";

import { IGradientThemeNames } from "../../../models/Theme";
import { gradientThemesList } from "../../../models/Theme";

import InputCaptionText from "../../common/InputCaptionText";

interface IThemePicker {
  onClickHandler: (themeId: IGradientThemeNames) => void;
}
const ThemePicker = (props: IThemePicker) => {
  const { themeSelection } = useDataContext();
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <InputCaptionText text="TAG THEME" />
      <div className="flex flex-row items-center justify-start mb-8 gap-4">
        {gradientThemesList.map((t) => {
          // compare if matches
          let isSelected = t === themeSelection;
          return (
            <button
              key={t.indexOf(t)}
              onClick={() => {
                // props.onClickHandler(t)
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
