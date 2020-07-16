//!Gradients

import { colors, color } from "../colors"
import { lighten, darken } from "@theme-ui/color"

export default {
  preset: {
    gray: {
      background:
        "linear-gradient(90deg, rgba(117,117,117,1) 0%, rgba(130,130,130,1) 51%, rgba(117,117,117,1) 100%)",
      // "linear-gradient(90deg, `${lighten(highlight, 0.52)}` 0%, (130, 130, 130, .5) 100%)",
    },
  },
  defined: {
    purple: {
      background: "linear-gradient(to left,#4f005e,#33065b)",
    },
    example: {
      background: (t) => `linear-gradient(to left,${t.colors.highlight},#000)`,
    },
    highlight: {
      background: (t) => `linear-gradient(
        to left,
        ${lighten("highlight", 0.5)(t)},
        ${lighten("accent", 0.65)(t)} 51%,
        ${lighten("highlight", 0.5)(t)} 100%
      )
    `,
    },
  },
}
