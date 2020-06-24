/** @jsx jsx */
import { jsx, colors } from "theme-ui"
import { Link } from "gatsby"

export default ({ bg, colors, padding, text, variant, ...props }) => (
  <Link
    {...props}
    activeClassName="active"
    className="navLink"
    sx={{
      colors,
      padding,
      bg,
      fontWeight: "500",
    }}
  >
    {props.children}
  </Link>
)
