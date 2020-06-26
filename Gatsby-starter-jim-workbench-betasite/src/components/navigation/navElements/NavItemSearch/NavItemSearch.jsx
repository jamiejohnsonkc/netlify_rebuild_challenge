/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const NavItemSearch = ({ bg, color, padding, ...props }) => (
  <li
    {...props}
    className="navItemSearch"
    sx={{
      color,
      position: "relative",

      "&:hover": {
        cursor: "pointer",
      },
      "&:hover > ul, :focus-within > ul ": {
        visibility: "visible",
        opacity: "1",
        display: "block",
      },
      variant: "nav.navItemSearch",
    }}
  >
    {props.children}
  </li>
)

NavItemSearch.propTypes = {}

NavItemSearch.defaultProps = {}

export default NavItemSearch
