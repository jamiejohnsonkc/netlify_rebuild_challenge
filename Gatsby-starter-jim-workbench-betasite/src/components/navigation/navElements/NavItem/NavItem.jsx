/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const NavItem = ({ bg, color, padding, ...props }) => (
  <li
    {...props}
    className="navItem"
    sx={{
      color,
      position: "relative",

      "&:hover": {
        cursor: "pointer",
      },
      "&:hover > ul, :focus-within > ul ": {
        visibility: "visible",
        opacity: ["0", "0", "1", "1"],
        display: ["none", "none", "block", "block"],
      },
      variant: "nav.navItem",
    }}
  >
    {props.children}
  </li>
)

NavItem.propTypes = {}

NavItem.defaultProps = {}

export default NavItem
