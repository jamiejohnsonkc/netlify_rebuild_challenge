/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SubMenuNavItem = (props) => (
  <li
    {...props}
    sx={{
      variant: "nav.subSubMenuNavItem",
    }}
    aria-label="SubMenuNavItem"
  >
    {props.children}
  </li>
)

SubMenuNavItem.propTypes = {}

SubMenuNavItem.defaultProps = {}

export default SubMenuNavItem
