/** @jsx jsx */
import { jsx, Box, Text, Close, IconButton } from "theme-ui"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
// import RadialButton from "../../inputs/RadialButton"
import { darken, lighten } from "@theme-ui/color"
import Circle from "../../../../base/Circle"

const CloseButton = (props) => (
  <CloseButton
    // onClick={() => setIsVisible(!isVisible)}
    {...props}
    sx={{
      bg: darken("primary", 0.075),
      maxHeight: "1.618em",
      maxWidth: "1.618em",
      display: "flex",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      stroke: "white",
      strokeWidth: "1px",
      alignSelf: "inherit",
      marginLeft: "-10px",
      marginRight: "10px",
      borderRadius: "50%",
      position: "absolute",
      zIndex: 4,
      p: 1,
      // display: "inlineBlock",
    }}
  />
)

export default CloseButton
