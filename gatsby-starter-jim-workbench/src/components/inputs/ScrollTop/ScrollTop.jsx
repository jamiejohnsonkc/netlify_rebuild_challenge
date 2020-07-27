/** @jsx jsx */
import { jsx, Box, sizes } from "theme-ui"
import Button from "../Button"
import Icon from "../../base/Icon"
import React from "react"
import PropTypes from "prop-types"

const ScrollTop = (variant = "scrollUp.fixed", props) => (
  <Button
    {...props}
    sx={{
      padding: 1,
      borderRadius: 4,
      variant: `button.${variant}`,
    }}
  >
    <Icon
      iconName="ChevronUp"
      size="2em"
      {...props}
      sx={{
        verticalAlign: "sub",
        margin: "0em",
      }}
    />
  </Button>
)

ScrollTop.propTypes = {}

ScrollTop.defaultProps = {}

export default ScrollTop
