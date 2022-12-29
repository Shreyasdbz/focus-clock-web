import { GradientThemes } from "../models/Theme";

/**
 *
 * @param themeCss
 * @returns
 */
export function convertThemeCssToEnum(themeCss: string) {
  return themeCss as unknown as GradientThemes;
}
