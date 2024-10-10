export interface IGetNavigatorCurrentLocation {
  successCallback: PositionCallback;
  errorCallback: PositionErrorCallback;
}
export interface ISecurityStorage {
  secret: string;
}

type IColors =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

export interface IColorLogOptions {
  color: IColors;
  bgColor?: IColors;
  bold?: boolean;
  underline?: boolean;
}
