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
    height: ["10vh", "10vh", "unset", "unset"],
  },

  mastHeadLogo: {
    width: ["6em", "7em", "5em", "5em"],
    mx: [0, 0, 3, 3],
    lineHeight: 1,
    "& svg g path.logotext": {
      fill: "mastHeadLogo",
    },
  },

  //!where was this used before (or was it?) +> believe this is scrap.  saving jic

  //*  Responsive Menu/Drawer
  navBox: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    // flex: 1,
    display: "inline-flex",
    paddingTop: [2, 0],
    // py: 2,
    "@media (max-width: 768px)": {
      width: "100%",
      justifyContent: "flex-start",
      backgroundColor: "navMenuBackground",
      transition: "all 0.3s ease-in",
      top: "10vh",
      // overflow: ["scroll", "hidden"],
      // zIndex: 3,
    },
  },

  navMenu: {
    // justifyContent: "space-between",
    // alignItems: "center",
    // height: "100%",
    // flex: 1,
    // display: "flex",
    // display: "block",
    // py: 2,
  },

  //* Lists //
  //? this was prevdiously titled mainNavUl
  navMenu: {
    // display: "flex",
    // flex: `.1 5 53em`,
    display: "flex",
    flex: 1,
    margin: 0,
    padding: [0, 3],
    px: [0, 4],
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", "column", "row"],
    // width: ["100%"],
  },

  subMenu: {
    listStyle: "none",
    m: 0,
    p: 4,
    top: "100%",
    minWidth: "8rem",
    // backgroundColor: "nav.navBar",
    borderRadius: 6,
    transition: "all 0.3s ease",

    // marginTop: 1,
  },

  subSubMenu: {
    variant: "nav.subMenu",
  },

  //* List Items //
  navItem: {
    padding: [4, 0, 0, 0],
    transitionDuration: "0.3s",
    display: "flex",
    alignItems: "center",
    flex: `0 1 fit-content`,
    "@media (max-width: 768px)": {
      width: "100%",
      backgroundColor: "navMenuBackground",
      transition: "all 0.3s ease-in",
      display: "block",
      position: "relative",
    },
    hideSmall: {
      display: ["none", "none", "none", "block"],
    },
  },

  subMenuNavItem: {
    variant: "nav.navItem",
    display: ["none", "none", "flex", "flex"],
  },

  subSubMenuNavItem: {
    variant: "nav.navItem",
  },

  //* Additional Menu Elements //
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
    display: ["flex", "flex", "flex", "flex"],
    padding: "nav.navItem",
    alignSelf: "end",
  },

  navItemSpacer: {
    display: ["none", "flex", "flex", "flex"],
    flex: 0.1,
    padding: 0,
    // flexGrow: [null, null, "0.25", "0.25"],
    // flexBasis: [null, null, "4em", "2em"],
    cursor: "none",
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
    width: "71vw",
    borderRadius: 6,
    backgroundColor: color.white,
    transition: "all 0.3s ease-in",
    boxShadow: "subtle",
  },

  footerNav: { fontSize: 1 },
}

//TODO fix search icon in mobile
