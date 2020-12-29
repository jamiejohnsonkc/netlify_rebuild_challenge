/** @jsx jsx */
import { jsx, Text, Image } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Button from "../../inputs/Button"

const ImageTextButton = (props) => (
  <>
    <div
      sx={{
        marginBottom: 2,
      }}
    >
      {props.compImage}
    </div>
    <Text marginBottom="4" variant={props.textVariant}>
      {props.textText}
    </Text>
    <Button variant={props.buttonVariant}>{props.buttonContent}</Button>
  </>
)

ImageTextButton.propTypes = {}

ImageTextButton.defaultProps = {}

export default ImageTextButton
