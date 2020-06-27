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
  container: {
    maxWidth: ["100%", "100%", "60em", "79em"],
    px: 4,
    display: "block",
    position: "relative",
    margin: "0 auto",
    // mx: "auto",
    // content: {
    //   width: ["75%", "98%", "63%"],
    // },
  },

  mastHead: {
    display: "block",
    justifyContent: "center",
    marginTop: [0, 0, 4, 4],
    position: "relative",
    mx: "auto",
    width: "layout.container",
    backgroundColor: [
      "navMenuBackground",
      "navMenuBackground",
      "transparent",
      "transparent",
    ],
    // backgroundColor: "gray",
  },

  footer: {
    backgroundColor: "secondary",
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
