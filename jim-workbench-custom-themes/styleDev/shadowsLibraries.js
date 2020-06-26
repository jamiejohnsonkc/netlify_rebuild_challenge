export const radii = {
  default: "0.25rem",
  sm: "0.2rem",
  lg: "0.3rem",
  pill: "50rem",
}

export const shadows = {
  default: "0 .5rem 1rem rgba(0, 0, 0, .15)",
  sm: "0 .125rem .25rem rgba(0, 0, 0, .075)",
  lg: "0 1rem 3rem rgba(0, 0, 0, .175)",
}

export const baseColors = {
  black: "hsl(0, 0%, 4%)",
  blackBis: "hsl(0, 0%, 7%)",
  blackTer: "hsl(0, 0%, 14%)",
  // (sic)
  greyDarker: "hsl(0, 0%, 21%)",
  greyDark: "hsl(0, 0%, 29%)",
  grey: "hsl(0, 0%, 48%)",
  greyLight: "hsl(0, 0%, 71%)",
  greyLighter: "hsl(0, 0%, 86%)",
  whiteTer: "hsl(0, 0%, 96%)",
  whiteBis: "hsl(0, 0%, 98%)",
  white: "hsl(0, 0%, 100%)",
  orange: "hsl(14,  100%, 53%)",
  yellow: "hsl(48,  100%, 67%)",
  green: "hsl(141, 71%,  48%)",
  turquoise: "hsl(171, 100%, 41%)",
  cyan: "hsl(204, 86%,  53%)",
  blue: "hsl(217, 71%,  53%)",
  purple: "hsl(271, 100%, 71%)",
  red: "hsl(348, 100%, 61%)",
}

export const colors = {
  ...baseColors,
  text: baseColors.greyDark,
  background: baseColors.white,
  primary: baseColors.blue,
  muted: baseColors.whiteTer,
  // bulma-specific
  info: baseColors.cyan,
  success: baseColors.green,
  warning: baseColors.yellow,
  danger: baseColors.red,
  light: baseColors.whiteTer,
  dark: baseColors.greyDarker,
  modes: {
    invert: {},
  },
}
