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
