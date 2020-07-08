/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import Circle from "../Circle"
import { color } from "../../../../../jim-workbench-custom-themes/colors"

const CheckMark = (props) => (
  <Circle
    {...props}
    sx={{
      bg: color.blue,
      height: "1em",
      width: "1em",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Icon iconName="Check" size=".83em" color="white" />
  </Circle>
)

CheckMark.propTypes = {}

CheckMark.defaultProps = {}

export default CheckMark
