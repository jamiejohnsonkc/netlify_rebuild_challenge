/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

export default ({
  bg,
  padding,
  text,
  variant,
  fontWeight,
  color,
  flex,
  flexGrow,
  ...props
}) => (
  <div
    {...props}
    className="navElement"
    sx={{
      flexGrow,
      padding,
      bg,
      fontWeight,
      flex,
      cursor: "none",
      color: "navMenuItem",
    }}
  >
    {props.children}
  </div>
)
