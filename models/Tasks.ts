import { GradientThemes } from "./Theme";
import { TimerSizes } from "./Timer";

export interface ITag {
  id: string;
  description: string;
  themeId: GradientThemes;
}

export interface ITask {
  id: string;
  name: string;
  tagId?: string;
  size?: TimerSizes;
  priority?: number;
}
