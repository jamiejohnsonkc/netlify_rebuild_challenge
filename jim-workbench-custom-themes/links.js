export default {
  nav: {
    fontWeight: "normal",
    fontSize: [3, 3, 1, 2],
    fontFamily: "monospace",
    color: "white",
    letterSpacing: ".1em",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    py: 1,
    "&.active": { color: "accent" },
    "&:hover": {
      color: "accent",
      "&::after": {
        width: "100%",
        backgroundColor: "accent",
        transition: "all 0.3s ease-in-out",
      },
    },
    "&::after": {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      width: "0%",
      content: "'.'",
      color: "transparent",
      height: "0.1em",
    },
  },
}
