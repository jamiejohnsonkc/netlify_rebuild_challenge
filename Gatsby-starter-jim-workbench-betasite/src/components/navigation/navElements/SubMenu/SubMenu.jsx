/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SubMenu = (props) => (
  <ul
    {...props}
    sx={{
      listStyle: "none",
      cursor: "pointer",
      variant: "nav.subMenu",
    }}
    className="subMenu"
  />
)

SubMenu.propTypes = {}

SubMenu.defaultProps = {}

export default SubMenu
