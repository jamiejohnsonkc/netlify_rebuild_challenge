/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const SplitLine = (props) => [
  `${props.textLine1}`,
  <br />,
  `${props.textLine2}`,
]

const FullLine = (props) => (
  <span
    sx={{
      display: ["block", "none", "none", "none"],
    }}
  >
    {props.children}
  </span>
)

const SplitTextLine = (props) => (
  <>
    <span
      {...props}
      sx={{
        display: ["none", "block", "block", "block"],
      }}
    >
      <SplitLine {...props} />
    </span>
    <FullLine {...props}>
      {props.textLine1} {props.textLine2}
    </FullLine>
  </>
)

SplitTextLine.propTypes = {}

SplitTextLine.defaultProps = {}

export default SplitTextLine
