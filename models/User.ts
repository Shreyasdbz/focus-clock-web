export interface IAppUser {
  uniqueId: string;
  email: string;
  name?: string;
  pictureUrl?: string;
  timerSizesInMinutes: {
    tiny: number;
    small: number;
    medium: number;
    large: number;
    huge: number;
  };
}
