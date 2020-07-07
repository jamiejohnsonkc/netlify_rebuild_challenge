/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
export default (props) => (
  <Link
    {...props}
    activeClassName="active"
    className="navSubLink"
    to={props.to}
    sx={{
      variant: "links.navSubLink",
    }}
  >
    {props.children}
  </Link>
)
