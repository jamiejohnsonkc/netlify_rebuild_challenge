/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"

const CheckMark = (props) => (
  <Icon iconName="Check" size={props.iconSize} color={props.iconColor} />
)

CheckMark.propTypes = {}

CheckMark.defaultProps = {}

export default CheckMark
