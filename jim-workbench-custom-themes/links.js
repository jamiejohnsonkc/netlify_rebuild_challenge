export default {
  nav: {
    display: "inline-block",
    position: "relative",
    lineHeight: 1.5,
    fontWeight: 600,
    fontFamily: "Roboto",
    color: "#fff",
    letterSpacing: "-.025em",
    textTransform: "captilalize",
    textDecoration: "none",
    transition: "all 0.3s ease-in",
    fontSize: [2, 3, 1, 1],
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

  navSubLink: {
    variant: "links.nav",
  },

  navCTA: {
    color: "accent",
  },
  // navSearch: {
  //   display: ["none", "none", "flex", "flex"],
  //   visibility: ["hidden", "hidden", "visible", "visible"],
  //   padding: 1,
  //   "&:hover": {
  //     color: "",
  //     "&::after": {
  //       width: "100%",
  //       backgroundColor: "transparent",
  //     },
  //   },
  // },

  ctaLink: {},

  ctaIcon: {
    lineHeight: 1,
  },

  megaNavLink: {
    display: "block",
    fontSize: 2,
    fontWeight: "500",
    marginBottom: 2,
    color: "#000",
  },
}
