/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const FlexContainer = ({
  bg,
  className,
  color,
  height,
  width,
  justifyContent,
  alignItems,
  padding,
  ...props
}) => (
  <Flex
    className={className}
    {...props}
    sx={{
      bg,
      padding,
      className,
      color,
      height,
      width,
      justifyContent,
      alignItems,
    }}
  >
    {props.children}
  </Flex>
)

FlexContainer.propTypes = {
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  bg: PropTypes.string,
}

FlexContainer.defaultProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  height: "fit-content",
  width: "fit-content",
  justifyContent: "center",
  alignItems: "center",
  bg: "transparent",
}

export default FlexContainer
