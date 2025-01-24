type IColors =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

export interface ColorLogOptions {
  color: IColors;
  bgColor?: IColors;
  bold?: boolean;
  underline?: boolean;
}
