/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import Button from "../../inputs/Button"

const IconTextButton = (props) => (
  <>
    <Icon
      {...props}
      iconName={props.iconName}
      title={props.iconTitle}
      sx={{
        marginBottom: "",
      }}
    />

    <Text marginBottom="4" variant={props.textVariant}>
      {props.textText}
    </Text>
    <Button variant={props.buttonVariant}>{props.buttonContent}</Button>
  </>
)

IconTextButton.propTypes = {}

IconTextButton.defaultProps = {}

export default IconTextButton
