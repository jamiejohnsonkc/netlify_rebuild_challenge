/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SubSubMenuNavItem = (props) => (
  <li
    {...props}
    sx={{
      width: "100%",

      ":hover": {
        cursor: "pointer",
      },
      ":hover > ul, :focus-within > ul ": {
        visibility: "visible",
        opacity: "1",
        display: "block",
      },
      variant: "nav.subSubMenuNavItem",
    }}
    key={subSubLink.name}
    className="subSubMenuNavItem"
  >
    {props.children}
  </li>
)

SubSubMenuNavItem.propTypes = {}

SubSubMenuNavItem.defaultProps = {}

export default SubSubMenuNavItem
