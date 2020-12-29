/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Pancake = (props) => (
  <div
    as="Section"
    {...props}
    className={props.className}
    sx={{
      alignItems: "center",
      display: "grid",
      whiteSpace: "pre-wrap",
    }}
  />
)

Pancake.propTypes = {}

Pancake.defaultProps = {}

export default Pancake
