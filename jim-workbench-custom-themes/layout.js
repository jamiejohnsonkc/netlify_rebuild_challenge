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
  mastheadLogo: {
    width: "90px",
    "&>svg": {
      fill: "blue",
    },
  },
  navbox: {
    whiteSpace: "nowrap",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "rgba(0,0,0,.15)",
    borderBottom: "transparent",
    justifyContent: "space between",
    height: ["8vh", "auto", null, null, null, null],
    marginTop: 4,
    borderRadius: 4,

    drawer: {
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
    li: {
      alignSelf: "center",
    },
    footerNav: { fontSize: 1 },
  },
  navLogo: {
    backgroundColor: "rgba(0,0,0,.15)",
    textTransform: "capitalize",
    borderBottom: "transparent",
    justifyContent: "space-between",
    height: ["8vh", "4vh"],

    drawer: {
      "@media (max-width: 768px)": {
        // backgroundColor: "primary",
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
    ul: {
      display: "flex",
      flex: 1,
      flexDirection: ["column", "column", "row"],
    },
    li: {},
    footerNav: { fontSize: 1 },
  },

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
