//! LINKS

import { color } from "./colors"

export default {
  nav: {
    lineHeight: 1.5,
    fontWeight: 600,
    fontFamily: "Roboto",
    color: "navMenuItem",
    letterSpacing: "-.025em",
    textTransform: "captilalize",
    textDecoration: "none",
    transition: "all 0.3s ease-in",
    fontSize: [3, 3, 1, 1],
    "&.active": { color: "navItemActive" },
    "&:hover": {
      color: "navMenuItemHover",
      textDecoration: "underline",
      "&::after": {
        width: "100%",
        backgroundColor: "navMenuItemHover",
        // transition: "all 0.5s ease-in",
      },
    },
    "&::after": {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      width: "0%",
      content: "'.'",
      color: "transparent",
      height: "0.1em",
      top: "85%",
      zIndex: "1",
    },
  },

  navLinkSearchIcon: {
    color: "navMenuItem",
    width: "2em",
    height: "1.5em",
    verticalAlign: "sub",
    transition: "all 0.5s ease-in",
    "&:hover": {
      color: "navMenuItemHover",
      "&::after": {
        width: "100%",
        backgroundColor: "transparent",
      },
    },
  },

  navSearch: {
    display: ["none", "none", "flex", "flex"],
    visibility: ["hidden", "hidden", "visible", "visible"],
    padding: 1,
    "&:hover": {
      color: "background",
      "&::after": {
        width: "100%",
        backgroundColor: "transparent",
      },
    },
  },

  ctaLink: {
    arrowRight: {
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      color: "navMenuBackground_SM",

      "&:hover": {
        color: "navMenuItemHover",
      },
      // mainNavCta: {
      //   lineHeight: 1,
      //   verticalAlign: "middle",
      //   display: "flex",
      //   alignItems: "center",
      //   color: "navMenuItem",
      //   "&:hover": {
      //     color: "navMenuItemHover",
      //   },
      // },
    },
  },

  searchButton: {
    lineHeight: 1,
    visibility: ["visible", "visible", "hidden", "hidden"],
    display: ["flex", "flex", "none", "none"],
    alignItems: "center",
    color: "navMenuBackground_SM",
    "&:hover": {
      color: "navMenuItemHover",
    },
  },

  navSubLink: {
    lineHeight: 2,
    display: "block",
    minWidth: "20em",
    color: "navMenuItem",
    textDecoration: "none",
  },

  jumpLink: {
    textDecoration: "none",
    color: color.gray1,
  },

  megaNavLink: {
    display: "block",
    fontSize: 2,
    fontWeight: "500",
    marginBottom: 2,
    color: "#000",
  },

  dropDown: {
    // backgroundColor: "blue",
    // color: "",
  },
}
