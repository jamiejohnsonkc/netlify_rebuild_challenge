/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
export default (props) => (
  <Link
    {...props}
    activeClassName="active"
    className="navSubLink"
    sx={{
      variant: "links.navSubLink",

      //   "&.active": {
      //     color: "accent",
      //   },
    }}
  >
    {props.children}
  </Link>
)
