/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Button = ({ variant = "primary", ...props }) => (
  <button
    {...props}
    sx={{
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      fontWeight: "bold",
      m: 0,
      px: 3,
      py: 2,
      borderStyle: "solid",
      borderWidth: 2,
      borderRadius: 4,
      cursor: "pointer",
      variant: `buttons.${variant}`,
    }}
  />
)

Button.propTypes = {}

Button.defaultProps = {}

export default Button
