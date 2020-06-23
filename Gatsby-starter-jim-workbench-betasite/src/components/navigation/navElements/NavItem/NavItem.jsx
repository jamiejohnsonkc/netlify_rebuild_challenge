/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const NavItem = (props) => (
  <li
    {...props}
    sx={{
      listStyle: "none",
      cursor: "pointer",
      variant: "nav.navItem",
    }}
    className="navItem"
  />
)

NavItem.propTypes = {}

NavItem.defaultProps = {}

export default NavItem
