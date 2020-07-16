/** @jsx jsx */
import { jsx, Box, sizes } from "theme-ui"
import Button from "../../base/Button"
import Icon from "../../base/Icon"
import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"

const ScrollTop = (variant = "scrollUp.fixed", props) => (
  <Button
    {...props}
    sx={{
      padding: 1,
      borderRadius: 4,
      variant: `button.${variant}`,
    }}
  >
    <IconContext.Provider
      value={{
        style: {
          width: "2em",
          height: "2em",
          verticalAlign: "sub",
          margin: "0em",
        },
      }}
    >
      <Icon iconName="ChevronUp" />
    </IconContext.Provider>
  </Button>
)

ScrollTop.propTypes = {}

ScrollTop.defaultProps = {}

export default ScrollTop
