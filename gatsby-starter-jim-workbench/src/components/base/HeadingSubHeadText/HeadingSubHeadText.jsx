/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const HeadingSubHeadText = (props) => (
  <>
    <Heading variant={props.headingVariant}>{props.headingText}</Heading>
    <Heading variant={props.subHeadVariant}>{props.subHeadText}</Heading>
    <Text variant={props.textVariant}>{props.textText}</Text>
  </>
)

HeadingSubHeadText.propTypes = {
  headingText: PropTypes.any,
  headingVariant: PropTypes.any,
  subHeadText: PropTypes.any,
  subHeadVariant: PropTypes.any,
  textText: PropTypes.any,
  textVariant: PropTypes.any,
}

HeadingSubHeadText.defaultProps = {}

export default HeadingSubHeadText
