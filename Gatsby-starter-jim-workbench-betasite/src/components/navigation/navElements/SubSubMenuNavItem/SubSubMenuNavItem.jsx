/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SubSubMenuNavItem = (props) => (
  <li
    {...props}
    sx={{
      listStyle: "none",
      cursor: "pointer",
      variant: "nav.subSubMenuNavItem",
    }}
    className="subSubMenuNavItem"
  />
)

SubSubMenuNavItem.propTypes = {}

SubSubMenuNavItem.defaultProps = {}

export default SubSubMenuNavItem
