/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Section = (props) => (
  <div
    {...props}
    sx={{
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      display: "flex",
    }}
  >
    {props.children}
  </div>
)

Section.propTypes = {
  children: PropTypes.any,
}

Section.defaultProps = {}

export default Section
