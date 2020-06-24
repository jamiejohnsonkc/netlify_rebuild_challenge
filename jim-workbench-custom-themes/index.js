//See other presets to try at https://theme-ui.com/packages/presets
// import { funk } from "@theme-ui/presets"
// export default {
//   ...funk,
//   styles: {
//     ...funk.styles,
//   },
// }

// import theme from "../../../gatsby-theme-jim-workbench-styles"

// export default theme

// import { toTheme } from "@theme-ui/typography"
import { toTheme } from "./typographyjsEdits/my-to-theme"
import wp2016 from "typography-theme-wordpress-2016"
import merge from "lodash.merge"
import { options } from "./typography"
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
  breakpoints: ["40em", "52em", "64em", "80em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],

  // fontWeights: {
  //   body: 300,
  //   bold: 600,
  //   heading: 600,
  //   heavy: 900,
  // },
  letterSpacings: {
    spread: "0.25em",
    loose: "0.1em",
    nav: "0.1em",
    lazy: ".025em",
    normal: "null",
    tight: "-0.05em",
    heading: "-0.05em",
  },
  lineHeights: {
    body: 2,
    heading: 1,
    display: 1.5,
  },

  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "tight",
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
      lineHeight: 1,
      letterSpacing: ".015em",
      fontSize: 7,
    },
    b2: {
      fontFamily: "Roboto Slab",
      fontWeight: "heavy",
      lineHeight: 0.8,
      letterSpacing: "-0.084em",
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
      fontSize: 4,
    },
    d2: {
      variant: "text.display",
      fontSize: 3,
      lineHeight: 2,
    },
    d3: {
      variant: "text.display",
      fontSize: 2,
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
      fontsize: 4,
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
})
