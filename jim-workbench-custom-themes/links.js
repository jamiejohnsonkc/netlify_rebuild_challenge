export default {
  //!light
  // nav: {
  //   fontWeight: "normal",
  //   fontSize: [3, 3, 1, 2],
  //   fontFamily: "Roboto",
  //   color: "white",
  //   letterSpacing: ".1em",
  //   textTransform: "captilalize",
  //   textDecoration: "none",
  //   transition: "all 0.3s ease-in-out",
  //   py: 1,
  //   "&.active": { color: "accent" },
  //   "&:hover": {
  //     color: "accent",
  //     "&::after": {
  //       width: "100%",
  //       backgroundColor: "accent",
  //       transition: "all 0.3s ease-in-out",
  //     },
  //   },
  //   "&::after": {
  //     position: "absolute",
  //     bottom: "0",
  //     left: "0",
  //     right: "0",
  //     width: "0%",
  //     content: "'.'",
  //     color: "transparent",
  //     height: "0.1em",
  //   },
  // },

  //!dark
  nav: {
    display: "inline-block",
    position: "relative",
    lineHeight: 1,
    fontWeight: "normal",
    fontSize: [3, 3, 1, 1],
    fontFamily: "Roboto",
    color: "#fff",
    letterSpacing: ".1em",
    textTransform: "captilalize",
    textDecoration: "none",
    // transition: "all 0.3s ease-in",

    // my: [4, 4, 2],
    // mx: [null],
    // zIndex: [6, 6, 1],
    // padding: 1,

    "&.active": { color: "accent" },
    "&:hover": {
      color: "accent",
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
      top: "115%",
      zIndex: "-1",
    },
  },
  subMenu: {
    color: "primary",
  },
}
