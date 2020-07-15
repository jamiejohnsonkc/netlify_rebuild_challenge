//! NAV

import layout from "./layout"
import { color } from "./colors"

export default {
  //* nav root directory
  nav: {},

  navBar: {
    textTransform: "capitalize",
    borderRadius: [0, 0, 6, 6],
    backgroundColor: [
      "transparent",
      "transparent",
      "navMenuBackground",
      "navMenuBackground",
    ],
    lineHeight: 1.5,
    px: [0, 0, 0, 0],
    py: 0,
    display: "flex",
    // alignSelf: "center",
    alignItems: ["center", "center", "none", "none"],
    justifyContent: ["space-between", "space-between", "none", "none"],
    // height: "10vh",
    // display: "flex",
    width: "100%",
    height: ["4em", "4em", "unset", "unset"],
  },

  mastHeadLogo: {
    width: ["6em", "7em", "5em", "5em"],
    mx: [0, 0, 3, 3],
    lineHeight: 1,
    "& svg g path.logotext": {
      fill: "mastHeadLogo",
    },
  },

  //*  Responsive Menu/Drawer
  navBox: {
    justifyContent: [
      "flex-start",
      "flex-start",
      "space-between",
      "space-between",
    ],
    alignItems: "center",
    height: "100%",
    width: "100%",
    transition: "all 0.3s ease-in",
    // flex: 1,
    // display: "inline-flex",
    paddingTop: [4, 0],
    backgroundColor: [
      "navMenuBackground_SM",
      "navMenuBackground_SM",
      "transparent",
      "transparent",
    ],
    // py: 2,
    "@media (max-width: 768px)": {
      // width: "100%",
      // height: "100%",
      // justifyContent: "flex-start",
      // backgroundColor: [
      //   "mobileNavMenuBackground",
      //   "mobileNavMenuBackground",
      //   "navMenuBackground",
      //   "navMenuBackground",
      // ],
      // transition: "all 0.3s ease-in",
      top: "0",
      position: "fixed",
      overflowY: "scroll",
      // overflow: ["scroll", "hidden"],
      // zIndex: 3,
    },
  },

  //* Lists

  navMenu: {
    // display: "flex",
    // flex: `.1 5 53em`,

    margin: 0,
    py: [0, 3, 3, 3],
    px: [0, 4, 4, 4],
    // alignItems: "center",
    // display: "flex",
    // flex: 1,
    // justifyContent: "space-around",
    // flexDirection: ["column", "column", "row"],
    // width: "100%",
  },

  navItem: {
    padding: [4, 0, 0, 0],
    // transitionDuration: "0.3s",
    transition: "all 0.3s ease-in",
    // backgroundColor: [
    //   "navMenuBackground_SM",
    //   "navMenuBackground_SM",
    //   "navMenuBackground",
    //   "navMenuBackground",
    // ],
    "&:hover": {
      textDecoration: "underline",
    },
    // "@media (max-width: 768px)": {
    // width: "100%",
    // backgroundColor: [
    //   "navMenuBackground_SM",
    //   "navMenuBackground_SM",
    //   "navMenuBackground",
    //   "navMenuBackground",
    // ],
    // transition: "all 0.3s ease-in",
    // display: "block",
    // position: "relative",
    // },
    //TODO confirm benefit/functionality of the hideSmall styling
    hideSmall: {
      display: ["none", "none", "none", "block"],
    },
  },

  subMenu: {
    listStyle: "none",

    p: 4,
    top: "100%",
    minWidth: "8rem",
    // backgroundColor: "nav.navBar",
    borderRadius: 6,
    transition: "all 0.3s ease",
    display: "none",
    // backgroundColor: "white",
  },

  subMenuNavItem: {},

  subSubMenu: {
    listStyle: "none",
    p: 0,
  },

  subSubMenuNavItem: {
    lineHeight: 2,
    fontWeight: 500,
  },

  //!NavSubSub is not defined

  //!Submenubox is lady coding for the saas dropdown menu, should've been a NavSubLink variant (or whatever)
  subMenuBox: {
    borderRadius: ".5em",
    backgroundColor: color.white,
    transition: "all 0.3s ease-in",
    boxShadow: "depth",
    display: ["none", "none", "block", "block"],
    padding: 4,
    minWidth: "17em",
  },

  superMenu: {
    listStyle: "none",

    p: 4,
    bottom: 0,
    minWidth: "8rem",
    left: "unset",
    // backgroundColor: "nav.navBar",
    borderRadius: 6,
    transition: "all 0.3s ease",
    display: "none",
  },

  superMenuBox: {
    borderRadius: ".5em",
    backgroundColor: color.black,
    color: color.white,
    transition: "all 0.3s ease-in",
    boxShadow: "depth",
    display: ["none", "none", "block", "block"],
    padding: 3,
    minWidth: "18em",
  },

  //* Extraneous Saas Menu Elements //
  navMenuDivider: {
    transitionDuration: "0.3s",
    flexBasis: "auto",
    padding: 1,
    display: ["none", "none", "flex", "flex"],
    visibility: ["hidden", "hidden", "visible", "visible"],
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  navItemSearch: {
    display: ["none", "none", "flex", "flex"],
    visibility: ["hidden", "hidden", "visible", "visible"],
    padding: "nav.navItem",
    alignSelf: "end",
  },

  navItemSpacer: {
    display: ["none", "none", "flex", "flex"],
    visibility: ["hidden", "hidden", "visible", "visible"],
    flex: 0.1,
    padding: 0,
    // flexGrow: [null, null, "0.25", "0.25"],
    // flexBasis: [null, null, "4em", "2em"],
    cursor: "none",
  },

  ctaLinkWrapper: {
    "@media (max-width: 768px)": {
      display: "flex",
      background: "white",
      borderRadius: "3em",
      py: 2,
      // paddingRight: 6,
      // paddingLeft: 4,
      width: "12em",
      justifyContent: "center",
      alignContent: "center",
    },
  },

  searchLinkWrapper: {
    "@media (max-width: 768px)": {
      display: "flex",
      background: "white",
      borderRadius: "3em",
      py: 2,
      // paddingRight: 6,
      // paddingLeft: 4,
      width: "12em",
      justifyContent: "center",
      alignContent: "center",
    },
  },

  // sideNavDrawer: {
  //   "@media (max-width: 768px)": {
  //     backgroundColor: "primary",
  //     width: "100%",
  //   },
  // },

  // menuChevronDown: {
  //   color: "muted",
  //   verticalAlign: "middle",
  //   width: "1.25em",
  // },

  toggle: {
    display: "none",
    height: "100%",
    cursor: "pointer",
    padding: 2,
    "@media (max-width: 768px)": {
      display: "inline-flex",
      // position: "fixed",
      zIndex: 3,
      right: 0,
    },
  },

  hamburger: {
    backgroundColor: "navMenuItem",
    borderRadius: 6,
    width: "30px",
    height: "3px",
    transition: "all 0.3s linear",

    "&::before": {
      backgroundColor: "navMenuItem",
      borderRadius: 6,
      width: "30px",
      height: "3px",
      transition: "all 0.3s linear",
    },
    "&::after": {
      backgroundColor: "navMenuItem",
      borderRadius: 6,
      width: "30px",
      height: "3px",
      transition: "all 0.3s linear",
    },
  },

  megaNav: {
    borderRadius: 6,
    backgroundColor: color.white,
    transition: "all 0.3s ease-in",
    boxShadow: "depth",
    width: "80vw",
  },
  megaNavHeader: {
    color: color.blueDark,
    variant: "text.caps",
  },

  megaNavColumnHead: {
    color: color.teal,
    variant: "text.caps",
  },
  megaNavText: {
    color: "black",
  },

  footerNav: { fontSize: 1 },

  dropDownMenu: {
    backgroundColor: `${color.gray3}`,
    height: "20em",
  },
}

//TODO review all nav color assignements
//TODO config hot swapping of large and small menu formats

//TODO combine all styling for menus in one, separate js file.  leave the defaults alone to provide functionality for primitives.
