/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ bg, padding, text, color, variant, ...props }) => (
  <Link
    {...props}
    activeClassName="active"
    className="navLink"
    sx={{
      padding,
      bg,
      fontWeight: 500,
      variant: "links.nav",
      // "&:hover": {
      //   color: "links.nav",
      // },
    }}
  >
    {props.children}
  </Link>
)
