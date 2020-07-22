/** @jsx jsx */
import { jsx, Label, Input, Box, Button } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import palette from "@palette"
import { darken, lighten } from "@theme-ui/color"

const Email_SignUp = (props) => (
  <Box as="form" onSubmit={(e) => e.preventDefault()}>
    <Input
      name="email"
      id="email"
      mb={3}
      placeholder="Email address"
      {...props}
      sx={{
        display: "inline-block",
        width: "20em",
        padding: 2,
        marginRight: 2,
        lineHeight: 2,
        fontSize: 1,
        boxSizing: "border-box",
        "& :focus": {
          borderColor: "transparent",
          outline: "none",
        },
      }}
    />
    <Button
      {...props}
      sx={{
        display: "inline-block",
        bg: palette.teal,
        "&:hover": {
          bg: lighten(palette.teal, 0.05),
        },
      }}
    >
      Subscribe
    </Button>
  </Box>
)

Email_SignUp.propTypes = {}

Email_SignUp.defaultProps = {}

export default Email_SignUp
