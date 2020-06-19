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
    // backgroundColor: "gray",
  },

  navBar: {
    borderRadius: 6,
    variant: "layout.container",
    backgroundColor: "rgba(0,0,0,.15)",
    lineHeight: 1,
  },

  navMenu: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    lineHeight: 1,
  },

  mainMenu: {
    whiteSpace: "nowrap",
    position: "relative",
    cursor: "pointer",
    alignItems: "center",
    borderBottom: "transparent",
    justifyContent: "space-between",
    borderRadius: 4,
    px: 3,
    lineHeight: 1,
    height: ["8vh", "auto", null, null],
    flexDirection: ["column", "column", "row", "row"],
  },

  mastheadLogo: {
    width: "90px",
  },

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
