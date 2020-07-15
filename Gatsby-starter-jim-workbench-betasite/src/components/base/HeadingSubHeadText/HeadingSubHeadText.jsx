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
HeadingSubHeadText.propTypes = {}

HeadingSubHeadText.defaultProps = {}

export default HeadingSubHeadText



import { Box, Heading, Text } from 'theme-ui'

const HeadingText = (props) => (

)

HeadingText.propTypes = {}

HeadingText.defaultProps = {}

export default HeadingText
