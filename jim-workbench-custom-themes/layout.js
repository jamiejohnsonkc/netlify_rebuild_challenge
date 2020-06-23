import links from "./links"

export default {
  root: {},
  top: {
    bg: "#999",
    py: 4,
    px: 3,
    fontSize: 5,
  },
  bottom: {
    bg: "transparent",
    fontSize: 0,
  },
  mastHead: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: [0, 3, 3, 3],
    position: "relative",
    // backgroundColor: "gray",
  },

  mastheadLogo: {
    width: "5em",
    mx: 3,
    lineHeight: 1,
  },

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

  mainNav: {
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

  navMenu: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    lineHeight: 1,
    display: "flex",
  },

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
  mainNavUl: {
    display: "flex",
    margin: 0,
    padding: [0, 3],
    px: [0, 4],
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", "column", "row"],
    width: ["100%"],
  },

  mainNavSubMenu: {
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

  mainNavSubSubMenu: {
    variant: "layout.mainNavSubMenu",
  },

  //* List Items //
  mainNavListItem: {
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

  mainNavSubListItem: {
    variant: "layout.mainNavListItem",
    display: ["none", "none", "flex", "flex"],
  },

  mainNavSubSubListItem: {
    variant: "layout.mainNavListItem",
  },

  //* Additional Menu Elements //
  mainMenuDivider: {
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

  mainNavSearch: {
    variant: "layout.mainNavListItem",
    display: ["none", "flex", "flex", "flex"],
    padding: "layout.mainNavListItem",
  },

  // searchSpan: {
  //   display: ["inline-block", "none"],
  //   padding: "layout.mainNavListItem",
  // },

  // searchIcon: {
  //   display: ["none", "flex"],
  // },

  mainMenuSpacer: {
    variant: "layout.mainNavListItem",
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

  mainNavArrow: {
    verticalAlign: "sub",
    color: "layout.mainNavListItem",
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

  footer: {
    backgroundColor: "secondary",
  },
  container: {
    width: ["100%", "100%", "79em"],
    // content: {
    //   width: ["75%", "98%", "63%"],
    // },
  },

  row: {
    width: "100%",
  },
  paddedRow: {
    width: "100%",
    display: "block",
    padding: [0, 3],
  },
}
