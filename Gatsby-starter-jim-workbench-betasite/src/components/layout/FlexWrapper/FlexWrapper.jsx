/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const FlexWrapper = ({
  className,
  flexDirection,
  flexWrap,
  height,
  width,
  justifyContent,
  alignItems,
  style,
  bg,
  ...props
}) => (
  <Flex
    className={className}
    style={style}
    {...props}
    sx={{
      flexDirection,
      flexWrap,
      height,
      width,
      justifyContent,
      alignItems,
      bg,
    }}
  >
    {props.children}
  </Flex>
)

FlexWrapper.propTypes = {
  flexDirection: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  bg: PropTypes.string,
}

FlexWrapper.defaultProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  height: "fit-content",
  width: "fit-content",
  justifyContent: "center",
  alignItems: "center",
  bg: "transparent",
}

export default FlexWrapper
