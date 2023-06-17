export type Colors = typeof colors;
export type Palette = typeof palette;

export const colors = {
  white: "#FFFFFF",
  black: "#151515",
  red400: "#ff7770",
  red500: "#ff5147",
  red600: "#ff2a1f",
  blue100: "#DFF2FF",
  blue200: "#C6E7FF",
  blue500: "#6DC2FF",
  grey100: "#f5f5f5",
  grey200: "#e0e0e0",
  grey300: "#cccccc",
  grey400: "#b8b8b8",
  grey500: "#a3a3a3",
  grey600: "#8f8f8f",
  grey700: "#7a7a7a",
  grey800: "#666666",
  grey900: "#525252",
};

export const palette = {
  primary: colors.blue200,
  primary_light: colors.blue100,
  primary_dark: colors.blue100,
  secondary: colors.red400,
  secondary_light: colors.red500,
  secondary_dark: colors.red600,
  neutral: colors.grey200,
  neutral_light: colors.grey100,
  neutral_dark: colors.grey400,
  white: colors.white,
  black: colors.black,
};
