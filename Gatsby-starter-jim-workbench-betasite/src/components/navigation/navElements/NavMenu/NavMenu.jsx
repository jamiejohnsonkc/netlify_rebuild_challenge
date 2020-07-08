/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const NavMenu = (props) => (
  <ul
    {...props}
    sx={{
      listStyle: "none",
      cursor: "pointer",
      // variant: "nav.navMenu",
    }}
    // className="navMenu"
  />
)

NavMenu.propTypes = {}

NavMenu.defaultProps = {}

export default NavMenu
