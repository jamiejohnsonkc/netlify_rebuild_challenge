/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
export default (props) => (
  <Link
    {...props}
    activeClassName="active"
    className="NavLink"
    sx={{
      variant: "links.NavLink",

      //   "&.active": {
      //     color: "accent",
      //   },
    }}
  />
)
