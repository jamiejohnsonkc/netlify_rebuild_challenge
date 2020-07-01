/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Pancake = (props) => (
  <div
    as="Section"
    className="panCake"
    {...props}
    sx={{
      alignItems: "center",
      display: "grid",
      whiteSpace: "pre-wrap",
    }}
  >
    {props.children}
  </div>
)

Pancake.propTypes = {}

Pancake.defaultProps = {}

export default Pancake
