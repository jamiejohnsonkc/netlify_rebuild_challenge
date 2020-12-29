/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const MegaNavLink = ({
  bg,
  colors,
  padding,
  text,
  variant,
  margin,
  mt,
  ...props
}) => (
  <Link
    {...props}
    activeClassName="active"
    className="navLink"
    sx={{
      margin,
      mt,
      colors,
      padding,
      bg,
      variant: "links.megaNavLink",
    }}
  />
)

export default MegaNavLink
