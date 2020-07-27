/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../base/Icon"
import Button from "../Button"

const RadialButton = ({ bg, width, height, fill, color, ...props }) => (
  <>
    <Button variant="radialSelected">
      <Icon {...props} iconName="RadialSelected" sx={{}} />
    </Button>
  </>
)

RadialButton.propTypes = {}

RadialButton.defaultProps = {}

export default RadialButton
