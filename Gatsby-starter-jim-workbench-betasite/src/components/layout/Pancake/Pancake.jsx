/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Pancake = (props) => (
  <div
    as="Section"
    {...props}
    sx={{
      height: `calc(100vh - 18.75rem)`,
      maxHeight: "40.625em",
      minHeight: "26.875em",
      alignItems: "center",
      display: "grid",
      whiteSpace: "pre-wrap",
      //   gridTemplateColumns:
      //     "[full-start] minmax(2rem,1fr) [standard-start] 3.75rem [narrow-start] minmax(1rem,67.5rem) [narrow-end] 3.75rem [standard-end] minmax(2rem,1fr) [full-end]",
    }}
  >
    {props.children}
  </div>
)

Pancake.propTypes = {}

Pancake.defaultProps = {}

export default Pancake
