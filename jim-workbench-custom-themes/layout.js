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
    width: "90px",
  },

  navBar: {
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,.15)",
    lineHeight: 1,
    px: 3,
    alignSelf: "center",
    alignItems: "center",
    variant: "layout.container",
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
    cursor: "pointer",
    alignItems: "center",
    borderBottom: "transparent",
    justifyContent: "space-between",
    borderRadius: 4,
    lineHeight: 1,
    height: ["8vh", "auto", null, null],
    flexDirection: ["column", "column", "row", "row"],
  },

  mainMenuli: {
    display: "flex",
    flexBasis: "auto",
  },
  //targeting specific Li's
  mainMenuSpacer: { display: "flex", flexBasis: "auto", flexGrow: ".5" },
  mainMenuSearch: { display: "flex", flexBasis: "auto" },
  mainMenuContact: { display: "flex", flexBasis: "auto" },
  mainMenuLogIn: { display: "flex", flexBasis: "auto" },
  mainMenuDivider: { display: "flex", flexBasis: "auto" },
  mainMenuSignUp: { display: "flex", flexBasis: "auto" },

  mainSubMenu: {
    listStyle: "none",
    m: 0,
    p: 0,
    backgroundColor: "white",
    minWidth: "20rem",
    // transition: "all 0.5s ease",
    // left: "0",
    marginTop: "1rem",
    borderRadius: 4,
  },

  mainSubMenuli: {},

  sideNavDrawer: {
    "@media (max-width: 768px)": {
      backgroundColor: "primary",
    },
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
