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
  nav: {
    backgroundColor: "secondary",
    textTransform: "capitalize",
    borderBottom: "1px solid gray",
    justifyContent: "flex-end",
    height: ["8vh", "10vh"],

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
