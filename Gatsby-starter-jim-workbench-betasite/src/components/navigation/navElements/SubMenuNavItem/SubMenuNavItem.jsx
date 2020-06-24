/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SubMenuNavItem = (props) => (
  <li
    {...props}
    sx={{
      visibility: "hidden",
      opacity: "0",
      display: "none",
      position: "absolute",

      ":hover": {
        visibility: "visible",
        opacity: "1",
        display: "block",
      },
      variant: "nav.subSubMenu",
    }}
    aria-label="submenu"
    className="subSubMenu"
  >
    {props.children}
  </li>
)

SubMenuNavItem.propTypes = {}

SubMenuNavItem.defaultProps = {}

export default SubMenuNavItem
