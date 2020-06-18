/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Masthead = (props) => (
  <div
    {...props}
    className="mastHead"
    sx={{
      variant: "layout.mastHead",
    }}
  >
    {props.children}
  </div>
)

Masthead.propTypes = {}

Masthead.defaultProps = {}

export default Masthead
