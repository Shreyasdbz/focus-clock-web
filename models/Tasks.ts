import { IGradientThemeNames } from "./Theme";
import { TimerSizes } from "./Timer";

export interface ITag {
  id: string;
  description: string;
  themeId: IGradientThemeNames;
}

export interface ITask {
  id: string;
  name: string;
  tagId?: string;
  size?: TimerSizes;
  priority?: number;
}
