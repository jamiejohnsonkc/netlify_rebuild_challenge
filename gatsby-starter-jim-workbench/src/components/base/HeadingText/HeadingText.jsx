/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text } from 'theme-ui'

const HeadingText = (props) => (
	<Box>
		<Heading variant={props.headingVariant}>{props.headingText}</Heading>
		<Text variant={props.textVariant}>{props.textText}</Text>
	</Box>
)

HeadingText.propTypes = {}

HeadingText.defaultProps = {}

export default HeadingText
