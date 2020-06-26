/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ bg, colors, padding, text, variant, ...props }) => (
  <a
    {...props}
    className="navLinkEmphasis"
    sx={{
      padding,
      bg,
      fontWeight: 500,
      variant: "links.nav",
      color: "highlight",
    }}
  >
    {props.children}
  </a>
)
