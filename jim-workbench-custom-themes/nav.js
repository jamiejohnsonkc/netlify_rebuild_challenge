import layout from "./layout"

export default {
  nav: {},

  //!!! turns out this was scrap too.  saving jic
  // mainMenu: {
  //   whiteSpace: "nowrap",
  //   // position: "relative",
  //   alignItems: "center",
  //   borderBottom: "transparent",
  //   // justifyContent: "space-between",
  //   borderRadius: 4,
  //   lineHeight: 1,
  //   height: ["8vh", "auto", null, null],
  //   flexDirection: ["column", "column", "row", "row"],
  // },

  //* nav root directory
  navBar: {
    textTransform: "capitalize",
    borderRadius: [0, 0, 6, 6],
    // backgroundColor: "rgba(0,0,0,.15)",
    lineHeight: 1.5,
    px: 0,
    py: 0,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    // height: "10vh",
    display: "flex",
    width: "100%",
    "@media (max-width: 768px)": {
      backgroundColor: "primary",
      width: "100%",
      height: "10vh",
    },
  },

  mastHeadLogo: {
    width: "5em",
    mx: 3,
    lineHeight: 1,
  },

  //!where was this used before (or was it?) +> believe this is scrap.  saving jic

  navMenu: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    flex: 1,
    display: "flex",
    py: 2,
  },

  //*  Responsive Menu/Drawer
  navBox: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    flex: 1,
    display: "flex",
    paddingTop: [2, 0],
    // py: 2,
    "@media (max-width: 768px)": {
      width: "100%",
      justifyContent: "flex-start",
      backgroundColor: "primary",
      transition: "all 0.3s ease-in",
      top: "10vh",
      // overflow: ["scroll", "hidden"],
      // zIndex: 3,
    },
  },

  //* Lists //
  //? this was prevdiously titled mainNavUl
  navMenu: {
    display: "flex",
    margin: 0,
    padding: [0, 3],
    px: [0, 4],
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", "column", "row"],
    width: ["100%"],
  },

  subMenu: {
    listStyle: "none",
    m: 0,
    p: 4,
    top: "100%",
    minWidth: "8rem",
    backgroundColor: "nav.navBar",
    borderRadius: 6,
    transition: "all 0.5s ease",

    // marginTop: 1,
  },

  subSubMenu: {
    variant: "nav.subMenu",
  },

  //* List Items //
  navItem: {
    // backgroundColor: "transparent",
    // ":nth-child(odd)": {
    //   backgroundColor: ["rgba(0,0,0,.15)", "transparent"],
    // },
    // color: "white",
    padding: [4, 0, 0, 0],
    transitionDuration: "0.5s",
    display: "flex",
    // width: ["fill-available", "default"],
    // flexBasis: "auto",
    // minWidth: ["100%", "auto", "auto", "auto"],
    "&:hover": {
      // backgroundColor: "white",
      "& > a": {
        // color: "accent",
      },
    },
    "@media (max-width: 768px)": {
      width: "100%",
      // justifyContent: "flex-start",
      // paddingTop: [2, 0],
      backgroundColor: "primary",
      transition: "all 0.3s ease-in",
      // top: "10vh",
      // overflow: ["scroll", "hidden"],
      // zIndex: 3,
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
    color: "white",
    transitionDuration: "0.5s",
    flexBasis: "auto",
    padding: 1,
    display: ["none", "none", "flex", "flex"],
    visibility: ["hidden", "hidden", "visible", "visible"],
    // transitionDuration: "0.5s",
    // display: "flex",
    // flexBasis: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  navSearch: {
    display: ["none", "none", "flex", "flex"],
    padding: "nav.navItem",
    alignSelf: "end",
  },

  // searchSpan: {
  //   display: ["inline-block", "none"],
  //   padding: "nav.navItem",
  // },

  // searchIcon: {
  //   display: ["none", "flex"],
  // },

  navMenuSpacer: {
    display: ["none", "flex", "flex", "flex"],
    padding: 0,
    flexGrow: 0.5,
    cursor: "default",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  sideNavDrawer: {
    "@media (max-width: 768px)": {
      backgroundColor: "primary",
      width: "100%",
    },
  },

  menuChevronDown: {
    color: "muted",
    verticalAlign: "middle",
    width: "1.25em",
  },

  menuArrowRight: {
    color: "accent",
  },

  toggle: {
    display: "none",
    height: "100%",
    cursor: "pointer",
    padding: 2,
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },

  hamburger: {
    backgroundColor: "white",
    borderRadius: 6,
    width: "30px",
    height: "3px",
    transition: "all 0.3s linear",

    "&::before": {
      backgroundColor: "white",
      borderRadius: 6,
      width: "30px",
      height: "3px",
      transition: "all 0.3s linear",
    },
    "&::after": {
      backgroundColor: "white",
      borderRadius: 6,
      width: "30px",
      height: "3px",
      transition: "all 0.3s linear",
    },
  },

  megaNav: {
    width: "71vw",
    borderRadius: 6,
    backgroundColor: "muted",
    transition: "all 0.3s ease-in",
  },

  footerNav: { fontSize: 1 },
}

//TODO fix search icon in mobile
