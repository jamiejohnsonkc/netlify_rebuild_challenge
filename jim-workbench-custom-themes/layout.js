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
    marginTop: 3,
    position: "relative",
    // backgroundColor: "gray",
  },

  mastheadLogo: {
    width: "100px",
    paddingRight: 3,
  },

  navBar: {
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,.15)",
    lineHeight: 1,
    px: 3,
    alignSelf: "center",
    alignItems: "center",
    // variant: "layout.container",
    // "@media (max-width: 768px)": {
    //   backgroundColor: "primary",
    //   width: "100%",
    // },
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
    justifyContent: "space-between",
    borderRadius: 4,
    lineHeight: 1,
    height: ["8vh", "auto", null, null],
    flexDirection: ["column", "column", "row", "row"],
  },

  mainNavUl: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: ["column", "column", "row"],
  },
  mainNavListItem: {
    backgroundColor: "transparent",
    color: "white",
    padding: "1rem",
    transitionDuration: "0.5s",
    display: "flex",
    flexBasis: "auto",
    "&:hover": {
      backgroundColor: "white",
    },
  },

  //* targeting additional main menu lineitems
  mainMenuSignUp: {
    variant: "layout.mainNavListItem",
    marginRight: 0,
  },
  mainMenuContact: { variant: "layout.mainNavListItem" },
  mainMenuLogIn: { variant: "layout.mainNavListItem" },

  mainNavElements: {
    color: "mainNavListItem",
    padding: "1rem",
    transitionDuration: "0.5s",
    display: "flex",
    flexBasis: "auto",
    "&:hover": {
      backgroundColor: "white",
    },
  },

  mainMenuSearch: { variant: "layout.mainNavElements" },

  mainMenuSearchIcon: {
    color: "white",
    width: "1.25em",
    height: "1.25em",
    verticalAlign: "sub",
    ":hover": {
      color: "accent",
    },
  },

  mainMenuDivider: {
    variant: "layout.mainNavElements",
    maxWidth: "10px",
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  mainMenuSpacer: {
    display: "layout.mainNavListItem",
    flexBasis: "layout.mainNavListItem",
    flexGrow: ".75",
    cursor: "default",
  },

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  mainNavSubMenu: {
    listStyle: "none",
    m: 0,
    p: 0,
    minWidth: "8rem",
    backgroundColor: "darkorange",
    transition: "all 0.5s ease",
    marginTop: "1rem",
  },

  //   mainSubMenu: {
  //     listStyle: "none",
  //     m: 0,
  //     p: 0,
  //     backgroundColor: "white",
  //     minWidth: "20rem",
  //     // transition: "all 0.5s ease",
  //     // left: "0",
  //     marginTop: "1rem",
  //     borderRadius: 4,
  //   },

  mainSubMenuli: {},

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

  hamburger: {
    backgroundColor: "white",
    "&::before": {
      backgroundColor: "white",
    },
    "&::after": {
      backgroundColor: "white",
    },
  },
  // ul: {
  //   display: "flex",
  //   flex: 1,
  //   flexDirection: ["column", "column", "row"],
  // },
  // li: {
  //   alignSelf: "center",
  // },
  footerNav: { fontSize: 1 },

  footer: {
    backgroundColor: "secondary",
  },
  container: {
    width: ["90%", "75%", "63%"],
    content: {
      width: ["75%", "98%", "63%"],
    },
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
