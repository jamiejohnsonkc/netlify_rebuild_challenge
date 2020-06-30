export const color = {
  teal: "#00AD9F",
  tealDark: "#15847D",
  tealBright: "#00E0CE",
  pink: "#FF6969",
  pinkDark: "#FF1154",
  pinkAccessible: "#E8114E",
  orange: "#F86816",
  orangeDark: "#B74808",
  blue: "#43B4D8",
  blueDark: "#146396",
  blueDarkB: "#133857",
  violet: "#C57AA2",
  violetDark: "#7C0C64",
  yellow: "#FFAD43",
  yellowDark: "#CC801F",
  white: "#fff",
  white2: "#FBFBFB",
  black: "#000",
  black2: "#060606",
  black3: "#0e1e25",
  gray1: "#2D3B41",
  gray2: "#646E73",
  gray3: "#757575",
  gray4: "#BDBDBD",
  gray5: "#E0E0E0",
  gray6: "#F7F8F8",
  blackAlpha1: `rgba(0,0,0,.015)`,
  blackAlpha2: `rgba(0,0,0,.1)`,
  whiteAlpha1: `rgba(255,255,255,.05)`,
}
const colors = {
  //default
  text: color.black, //Body foreground color
  background: color.white, //Body background color
  primary: color.violetDark, //Primary brand color for links, buttons, etc.
  secondary: color.gray3, //Secondary brand color for alternative styling
  accent: color.violet, //Contrast color for emphasizing UI
  highlight: color.tealBright, //Background color for highlighting text
  muted: color.gray6, //Faint color for backgrounds, borders, and accents that do not require high contrast with the background color
  navMenuBackground: color.blackAlpha2,
  navMenuItem: color.white,
  mastHeadLogo: color.white,
  navMenuItemHover: color.violetDark,

  modes: {
    inverse: {
      text: color.white,
      background: color.violetDark,
      primary: color.violet,
      secondary: color.gray5,
      accent: color.gray6,
      highlight: color.white,
      muted: color.gray,
      navMenuBackground: color.whiteAlpha1,
      navMenuItem: color.white2,
      mastHeadLogo: color.white2,
      navMenuItemHover: color.gray5,
    },

    dark: {
      text: color.white,
      background: color.black2,
      primary: color.gray3,
      secondary: color.gray5,
      accent: color.gray6,
      highlight: color.white,
      muted: color.gray,
      navMenuBackground: color.whiteAlpha1,
      navMenuItem: color.white2,
      mastHeadLogo: color.white2,
      navMenuItemHover: color.gray5,
    },
    purple: {
      text: "#fff",
      background: "#4f005e",
      primary: "#000",
    },
    gray: {
      text: "#fff",
      background: "#303030",
      primary: "#000",
    },
    blue: {
      text: "#146396",
      background: "#f7f8f8",
      primary: "#146396",
      navMenuItem: "#888",
      navMenuItemHover: "#43B4d8",
      highlight: "#43B4d8",
    },
    mono: {
      text: "#2D3B41",
      background: "#f7f8f8",
      primary: "#146396",
      navMenuItem: "#888",
      navMenuItemHover: "#43B4d8",
      highlight: "#43B4d8",
    },
  },
}

export default colors
