/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SubMenu = ({ width, color, bg, ...props }) => (
  <ul
    {...props}
    className="subMenu"
    sx={{
      width,
      color,
      bg,
      visibility: "hidden",
      opacity: "0",
      display: "none",
      position: "absolute",
      left: "0",
      ":hover": {
        visibility: "visible",
        opacity: "1",
        display: "block",
      },
      variant: "nav.subMenu",
    }}
    aria-label="submenu"
  >
    {props.children}
  </ul>
)

SubMenu.propTypes = {}

SubMenu.defaultProps = {}

export default SubMenu
