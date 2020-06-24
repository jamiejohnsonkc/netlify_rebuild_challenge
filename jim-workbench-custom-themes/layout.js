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
    width: ["100%", "100%", "79em"],
    display: "block",
    position: "relative",
    mx: "auto",
    // content: {
    //   width: ["75%", "98%", "63%"],
    // },
  },

  mastHead: {
    display: "block",
    justifyContent: "center",
    marginTop: [0, 4, 4, 4],
    position: "relative",
    mx: "auto",
    width: "layout.container",
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

  intro: {
    height: `calc(100vh - 18.75rem)`,
    maxHeight: "40.625em",
    minHeight: "26.875em",
    alignItems: "center",
    color: "primary",
  },
}
