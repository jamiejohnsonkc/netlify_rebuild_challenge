/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import CheckMark from "../../../base/CheckMark"
import Circle from "../../../base/Circle"
import { color } from "../../../../../../jim-workbench-custom-themes/colors"

const CheckMarkRnd = (props) => (
  <Circle
    {...props}
    // className={props.circleClassName}
    sx={{
      bg: color.blue,
      height: "1em",
      width: "1em",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CheckMark
      {...props}
      // className={props.checkMarkClassName}
      iconSize=".83em"
      iconColor="white"
    />
  </Circle>
)

CheckMarkRnd.propTypes = {}

CheckMarkRnd.defaultProps = {}

export default CheckMarkRnd
