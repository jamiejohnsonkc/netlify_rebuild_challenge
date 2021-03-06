//! THEME BASE STYLES

import { toTheme } from "./typographyjsEdits/my-to-theme"
import wp2016 from "typography-theme-wordpress-2016"
import merge from "lodash.merge"
import { options } from "./typography"
import forms from "./forms"
import colors from "./colors"
import layout from "./layout"
import cards from "./cards"
import links from "./links"
import buttons from "./buttons"
import nav from "./nav"
// import main from "./main"

const typography = toTheme(merge(wp2016, options), {})

export default merge(typography, {
  layout,
  nav,
  cards,
  colors,
  links,
  buttons,
  forms,
  breakpoints: ["40em", "52em", "60em", "80em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  widths: [
    "6.18%",
    "9.99%",
    "16.18%",
    "23.6%",
    "38.2%",
    "50%",
    "61.8%",
    "83.82%",
  ],

  letterSpacings: {
    spread: "0.25em",
    loose: "0.1em",
    nav: "0.1em",
    lazy: ".025em",
    normal: "null",
    tight: "-0.05em",
    snug: "-0.025em",
  },
  lineHeights: {
    body: 2,
    heading: 1.25,
    display: 1.5,
  },

  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "body",
      lineHeight: "display",
    },
    copy: {
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
    },

    utility: {
      fontFamily: "Roboto",
    },
    legal: {
      fontWeight: "normal",
      fontFamily: "Roboto",
      fontSize: 0,
      color: "white",
    },
    diagram: {},
    caption: {
      fontSize: 0,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "loose",
    },
    capsBold: {
      textTransform: "uppercase",
      letterSpacing: "loose",
      fontWeight: "bold",
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    b1: {
      fontFamily: "MadeDillan",
      fontWeight: "heavy",
      lineHeight: 1.25,
      letterSpacing: ".015em",
      fontSize: [6, 7, 7, 8],
    },
    b2: {
      fontFamily: "MadeDillan",
      fontWeight: "heavy",
      lineHeight: 1.25,
      letterSpacing: ".015em",
      fontSize: [6, 6, 7, 7],
    },
    b3: {
      fontFamily: "Roboto Slab",
      fontWeight: "heavy",
      lineHeight: 0.8,
      letterSpacing: "-0.084em",
      fontSize: 5,
    },

    h1: {
      color: "text",
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
      caps: {
        variant: "text.caps",
      },
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    d1: {
      variant: "text.display",
      lineHeight: "lineHeights.body",
      fontSize: 5,
    },
    d2: {
      variant: "text.display",
      lineHeight: "lineHeights.body",
      fontSize: 4,
      lineHeight: 2,
    },
    d3: {
      variant: "text.display",
      lineHeight: 2,
      fontSize: 3,
    },
    p: {
      fontsize: 0,
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      marginBottom: 2,
    },
    p2: {
      fontsize: 2,
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      marginBottom: 2,
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },

    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },

  shadows: {
    subtle: "0 0 4px 3px rgba(0, 0, 0, .05)",
    // test2: (theme) => `0 0 4px 3px ${theme.colors.primary}`,
    primary: `0 0 4px 3px ${colors.primary}`,
    present: `0 2px 40px rgba(14,30,37,.16)`,
    test5: `-10px 10px 80px rgba(0,0,0,.1)`,
    depth: `0 5px 20px -10px #000`,
    callOut: `0 0 4.236em rgba(14,30,37,.09)`,
  },
  // boxShadow: (theme) => `0 0 4px ${theme.colors.primary}`, },
})
