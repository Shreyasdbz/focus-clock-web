export interface IColorTheme {
  id: string;
  baseColor: string;
  toGradColor: string;
}

export type IGradientThemeNames =
  | "bgThemeA"
  | "bgThemeB"
  | "bgThemeC"
  | "bgThemeD";

export const gradientThemesList = [
  "bgThemeA",
  "bgThemeB",
  "bgThemeC",
  "bgThemeD",
];
