/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
export default (props) => (
  <Link
    {...props}
    activeClassName="active"
    className="navLink"
    sx={{
      variant: "links.navLink",

      //   "&.active": {
      //     color: "accent",
      //   },
    }}
  />
)
