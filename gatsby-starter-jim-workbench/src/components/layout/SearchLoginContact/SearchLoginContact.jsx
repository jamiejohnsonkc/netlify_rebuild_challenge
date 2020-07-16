/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import Icon from "../../base/Icon"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const SearchLoginContact = (props) => (
  <div>
    <Link
      sx={{
        variant: "links.nav",
      }}
    >
      <IconContext.Provider
        value={{
          style: {
            width: "1.25em",
            height: "1.25em",
            verticalAlign: "sub",
            margin: "1em",
            color: "white",
          },
        }}
      >
        <Icon iconName="Search" />
      </IconContext.Provider>
    </Link>
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
