/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const NavItemSpacer = ({ bg, color, padding, flex, flexGrow, ...props }) => (
  <li
    {...props}
    className="navItem"
    sx={{
      color,
      flex,
      flexGrow,
      position: "relative",
      variant: "nav.navItemSpacer",
    }}
  >
    {props.children}
  </li>
)

NavItemSpacer.propTypes = {}

NavItemSpacer.defaultProps = {}

export default NavItemSpacer
