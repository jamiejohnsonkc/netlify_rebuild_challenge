/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SubMenuNavItem = (props) => (
  <li
    {...props}
    sx={{
      listStyle: "none",
      cursor: "pointer",
      variant: "nav.subMenuNavItem",
    }}
    className="subMenuNavItem"
  />
)

SubMenuNavItem.propTypes = {}

SubMenuNavItem.defaultProps = {}

export default SubMenuNavItem
