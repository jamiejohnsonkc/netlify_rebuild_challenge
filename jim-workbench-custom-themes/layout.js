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
    marginTop: 3,
    position: "relative",
    // backgroundColor: "gray",
  },

  mastheadLogo: {
    width: "100px",
    paddingRight: 3,
  },

  //* Navbar //

  navBox: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    flex: 1,
    display: "flex",
    "@media (max-width: 768px)": {
      width: "100%",
      justifyContent: "flex-start",
      paddingTop: "10vh",
      backgroundColor: "#fff",
      transition: "all 0.3s ease-in",
      top: "8vh",
    },
  },

  mainNav: {
    textTransform: "uppercase",
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,.15)",
    lineHeight: 1,
    px: 3,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: "10vh",
    display: "flex",
    variant: "layout.container",
    "@media (max-width: 768px)": {
      backgroundColor: "primary",
      width: "100%",
      height: "8vh",
      py: 4,
      px: 3,
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
    justifyContent: "space-between",
    borderRadius: 4,
    lineHeight: 1,
    height: ["8vh", "auto", null, null],
    flexDirection: ["column", "column", "row", "row"],
  },
  //* Lists //
  mainNavUl: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: ["column", "column", "row"],
  },

  mainNavSubMenu: {
    listStyle: "none",
    m: 0,
    p: 0,
    minWidth: "8rem",
    backgroundColor: "blue",
    transition: "all 0.5s ease",
    marginTop: "30px",
  },

  mainNavSubSubMenu: {
    variant: "layout.mainNavSubMenu",
  },

  //* List Items //
  mainNavListItem: {
    backgroundColor: "transparent",
    color: "white",
    padding: "1rem",
    transitionDuration: "0.5s",
    display: "flex",
    flexBasis: "auto",
    "&:hover": {
      backgroundColor: "white",
      "& > a": {
        color: "accent",
      },
    },
  },

  mainNavSubListItem: {
    variant: "layout.mainNavListItem",
  },

  mainNavSubSubListItem: {
    variant: "layout.mainNavListItem",
  },

  //* Additional Menu Elements //
  mainMenuDivider: {
    color: "layout.mainNavListItem",
    padding: "1rem",
    transitionDuration: "0.5s",
    display: "flex",
    flexBasis: "auto",
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
