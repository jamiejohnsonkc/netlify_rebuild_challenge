/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const CircleBg = ({ height, color, backgroundColor, ...props }) => (
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

CircleBg.propTypes = {}

CircleBg.defaultProps = {}

export default CircleBg
