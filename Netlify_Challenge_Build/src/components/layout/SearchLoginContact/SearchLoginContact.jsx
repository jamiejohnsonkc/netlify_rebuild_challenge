/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Icon from "../../base/Icon"
import { Link } from "gatsby"

const SearchLoginContact = (props) => (
  <div>
    <Link
      sx={{
        variant: "links.nav",
      }}
    ></Link>
    <Icon
      {...props}
      iconName="Search"
      size="1.25em"
      sx={{
        verticalAlign: "sub",
        margin: "1em",
        color: "white",
      }}
    />

    <Link
      sx={{
        variant: "links.nav",
      }}
    >
      Contact sales
    </Link>
    <Link
      sx={{
        variant: "links.nav",
      }}
    >
      Log in
    </Link>
    <Link
      sx={{
        variant: "links.nav",
      }}
    >
      Sign up
    </Link>
  </div>
)

SearchLoginContact.propTypes = {}

SearchLoginContact.defaultProps = {}

export default SearchLoginContact
