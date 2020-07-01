/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Circle = ({ height, color, backgroundColor, ...props }) => (
  <div
    {...props}
    sx={{
      height,
      color,
      backgroundColor,
      borderRadius: "50%",
      display: "inlineBlock",
    }}
  />
)

Circle.propTypes = {}

Circle.defaultProps = {}

export default Circle
