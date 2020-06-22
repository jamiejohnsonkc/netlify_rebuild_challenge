export default {
  mainNavLink: {
    display: "inline-block",
    position: "relative",
    lineHeight: 1,
    fontWeight: "normal",
    fontSize: [1, 1, 0, 0],
    fontFamily: "Roboto",
    color: "#fff",
    letterSpacing: ".1em",
    textTransform: "captilalize",
    textDecoration: "none",
    transition: "all 0.3s ease-in",

    "&.active": { color: "accent" },
    "&:hover": {
      color: "",
      "&::after": {
        width: "100%",
        backgroundColor: "accent",
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
      top: "85%",
      zIndex: "1",
    },
  },

  mainMenuSearch: {
    variant: "links.mainNavLink",
    padding: 1,
    "&:hover": {
      color: "",
      "&::after": {
        width: "100%",
        backgroundColor: "transparent",
      },
    },
  },

  mainNavSubLink: {
    variant: "links.mainNavLink",
  },

  megaNavLink: {
    display: "block",
    fontSize: 2,
    fontWeight: 400,
  },
}
