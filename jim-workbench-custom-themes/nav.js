import layout from "./layout"

export default {
  nav: {},
  navBar: {},

  //* Navbar //

  navBox: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    flex: 1,
    display: "flex",
    // py: 2,
    "@media (max-width: 768px)": {
      width: "100%",
      justifyContent: "flex-start",
      paddingTop: [2, 0],
      backgroundColor: "primary",
      transition: "all 0.3s ease-in",
      top: "10vh",
      overflow: ["scroll", "hidden"],
    },
  },

  navBar: {
    textTransform: "capitalize",
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,.15)",
    lineHeight: 1.5,
    px: 0,
    py: 0,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    // height: "10vh",
    display: "flex",
    variant: "layout.container",
    "@media (max-width: 768px)": {
      backgroundColor: "primary",
      width: "100%",
      height: "10vh",
    },
  },

  //!where was this used before (or was it?)
  // navMenu: {
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   flex: 1,
  //   lineHeight: 1,
  //   display: "flex",
  // },

  //!!!! this should be moved to a custom file for the saas-spec project
  mainMenu: {
    whiteSpace: "nowrap",
    // position: "relative",
    alignItems: "center",
    borderBottom: "transparent",
    // justifyContent: "space-between",
    borderRadius: 4,
    lineHeight: 1,
    height: ["8vh", "auto", null, null],
    flexDirection: ["column", "column", "row", "row"],
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
    backgroundColor: "white",
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
    color: "white",
    padding: [4, 0, 0, 0],
    transitionDuration: "0.5s",
    display: "flex",
    // width: ["fill-available", "default"],
    flexBasis: "auto",
    "&:hover": {
      // backgroundColor: "white",
      "& > a": {
        color: "accent",
      },
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
    display: ["none", "flex", "flex", "flex"],
    visibility: ["hidden", "visible"],
    // transitionDuration: "0.5s",
    // display: "flex",
    // flexBasis: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  navSearch: {
    variant: "nav.navItem",
    display: ["none", "flex", "flex", "flex"],
    padding: "nav.navItem",
  },

  // searchSpan: {
  //   display: ["inline-block", "none"],
  //   padding: "nav.navItem",
  // },

  // searchIcon: {
  //   display: ["none", "flex"],
  // },

  navMenuSpacer: {
    variant: "nav.navItem",
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

  navMenuarrow: {
    verticalAlign: "sub",
    color: "nav.navItem",
    lineHeight: 1,
    height: "auto",
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

  footerNav: { fontSize: 1 },
}
