export type Colors={
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning:string;
  danger: string;
  dark: string;
  black: string;
  white: string;
  cardColor: string;
  bodyBg:string;
  bodyColor: string;
  headingColor:string;
  textMuted:string;
  borderColor: string;
  axisColor:string
}

export interface Config {
    colors: Colors;
    // ... other config properties
  }
let config = {
  colors: {
    primary: "#696cff",
    secondary: "#8592a3",
    success: "#71dd37",
    info: "#03c3ec",
    warning: "#ffab00",
    danger: "#ff3e1d",
    dark: "#233446",
    black: "#000",
    white: "#fff",
    cardColor: "#fff",
    bodyBg: "#f5f5f9",
    bodyColor: "#697a8d",
    headingColor: "#566a7f",
    textMuted: "#a1acb8",
    borderColor: "#eceef1",
    axisColor:'#a1acb8'
  },
};

export default config;
