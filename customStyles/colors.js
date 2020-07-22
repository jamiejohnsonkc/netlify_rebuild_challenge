//! COLORS

import palette from "./palette"

export default {
  text: palette.black2, //Body foreground color
  background: palette.white, //Body background color
  primary: palette.violetDark, //Primary brand color for links, buttons, etc.
  secondary: palette.gray3, //Secondary brand color for alternative styling
  accent: palette.violet, //Contrast color for emphasizing UI
  highlight: palette.tealBright, //Background color for highlighting text
  muted: palette.gray6, //Faint color for backgrounds, borders, and accents that do not require high contrast with the background color
  navMenuItem: palette.white,
  mastHeadLogo: palette.white,
  // navMenuItemHover: palette.violet,

  navMenuBackground: palette.blackAlpha2,
  // navMenuBackground: "white",

  // navMenuItemHover: palette.violet,
  navItemActive: palette.tealBright,
  announcementBarBackground: palette.tealDark,

  navMenuBackground_SM: palette.purple,

  modes: {
    splash: {
      text: palette.black2, //Body foreground color
      background: palette.white, //Body background color
      primary: palette.violetDark, //Primary brand color for links, buttons, etc.
      secondary: palette.gray3, //Secondary brand color for alternative styling
      accent: palette.violet, //Contrast color for emphasizing UI
      highlight: palette.tealBright, //Background color for highlighting text
      muted: palette.gray6, //Faint color for backgrounds, borders, and accents that do not require high contrast with the background color
      navMenuItem: palette.white,
      mastHeadLogo: palette.white,
      // navMenuItemHover: palette.violet,

      navMenuBackground: palette.blackAlpha2,
      // navMenuBackground: "white",

      // navMenuItemHover: palette.violet,
      navItemActive: palette.tealBright,
      announcementBarBackground: palette.tealDark,

      navMenuBackground_SM: palette.purple,
    },
    light: {
      navMenuItem: palette.gray1,
      mastHeadLogo: palette.gray1,
      navItemActive: palette.tealBright,
      announcementBarBackground: palette.tealDark,
      navMenuBackground: palette.blackAlpha1,
      navItemActive: palette.gray1,
      highlight: palette.teal,
    },
    // inverse: {
    //   text: palette.white,
    //   background: palette.violetDark,
    //   primary: palette.violet,
    //   secondary: palette.gray5,
    //   accent: palette.gray6,
    //   highlight: palette.white,
    //   muted: palette.gray,
    //   navMenuBackground: palette.whiteAlpha1,
    //   navMenuItem: palette.white2,
    //   mastHeadLogo: palette.white2,
    //   navMenuItemHover: palette.gray5,
    // },
    dark: {
      text: palette.white,
      background: palette.black2,
      primary: palette.gray3,
      secondary: palette.gray5,
      accent: palette.gray6,
      highlight: palette.white,
      muted: palette.gray,
      navMenuBackground: palette.whiteAlpha1,

      navMenuItem: palette.white2,
      mastHeadLogo: palette.white2,
      navMenuItemHover: palette.gray5,
    },
    // purple: {
    //   text: "#fff",
    //   background: "#4f005e",
    //   primary: "#000",
    // },
    // gray: {
    //   text: "#fff",
    //   background: "#303030",
    //   primary: "#000",
    // },
    // blue: {
    //   text: "#146396",
    //   background: "#f7f8f8",
    //   primary: "#146396",
    //   navMenuItem: "#888",
    //   navMenuItemHover: "#43B4d8",
    //   highlight: "#43B4d8",
    // },
    // mono: {
    //   text: "#2D3B41",
    //   background: "#f7f8f8",
    //   primary: "#146396",
    //   navMenuItem: "#888",
    //   navMenuItemHover: "#43B4d8",
    //   highlight: "#43B4d8",
    // },
  },
}
