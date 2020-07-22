/** @jsx jsx */
import { jsx, Text, Box } from "theme-ui"
import React from "react"

import PropTypes from "prop-types"

const InlineIconAndText = (props) => (
  <>
    <Box
      {...props}
      sx={{
        whiteSpace: "pre",
      }}
    >
      {props.inlineIcon}
      <Text
        {...props}
        sx={{
          display: "inline-block",
        }}
      >
        {props.inlineText}
      </Text>
    </Box>
  </>
)

export default InlineIconAndText
