/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import CheckMark from "../../../base/CheckMark"
import CircleBg from "../../../base/CircleBg"
import { color } from "../../../../../../customStyles/colors"

const CheckMarkRnd = (props) => (
  <CircleBg
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
  </CircleBg>
)

CheckMarkRnd.propTypes = {}

CheckMarkRnd.defaultProps = {}

export default CheckMarkRnd
