/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"

const HeadingDisplayButton = (props) => (
  <>
    <Heading variant={props.headingVariant}>{props.headingText}</Heading>
    <Text variant={props.displayVariant}>{props.displayText}</Text>
    <Button to={props.buttonTo}>{props.buttonText}</Button>
  </>
)

HeadingDisplayButton.propTypes = {}

HeadingDisplayButton.defaultProps = {}

export default HeadingDisplayButton
