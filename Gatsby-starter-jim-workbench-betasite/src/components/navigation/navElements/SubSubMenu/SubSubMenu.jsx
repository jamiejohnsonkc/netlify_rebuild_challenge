/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SubSubMenu = (props) => (
  <ul
    {...props}
    sx={{
      listStyle: "none",
      cursor: "pointer",
      variant: "nav.subSubMenu",
    }}
    className="subSubMenu"
  >
    {props.children}
  </ul>
)

SubSubMenu.propTypes = {}

SubSubMenu.defaultProps = {}

export default SubSubMenu
