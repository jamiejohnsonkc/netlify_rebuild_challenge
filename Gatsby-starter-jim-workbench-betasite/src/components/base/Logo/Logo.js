/** @jsx jsx */
import { jsx, Link, useThemeUI } from "theme-ui"
import React from "react"
import Icon from "../Icon"
import PropTypes from "prop-types"

const Logo = (props) => (
  <Icon
    iconName="Jimglyph"
    {...props}
    sx={{
      width: "4em",
      height: "4em",
      transition: "all 0.3s ease-in-out",
      fill: "white",
      "&:hover": {
        fill: "accent",
      },
    }}
  />
)

Logo.propTypes = {
  // bla: PropTypes.string,
}

Logo.defaultProps = {
  // bla: 'test',
}

export default Logo
