/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const VertBox = (props) => (
  <div
    {...props}
    sx={{
      transform: "rotate(90deg)",
      display: "inline-block",
      lineHeight: "1em",
      position: "absolute",
    }}
  >
    {props.children}
  </div>
)

VertBox.propTypes = {}

VertBox.defaultProps = {}

export default VertBox
