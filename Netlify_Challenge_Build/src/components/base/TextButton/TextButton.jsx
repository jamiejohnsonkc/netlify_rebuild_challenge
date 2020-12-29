/** @jsx jsx */
import { jsx, Text, Button } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const TextButton = (props) => (
	<>
		<Text marginBottom='4' variant={props.textVariant}>
			{props.textText}
		</Text>
		<Button variant={props.buttonVariant}>{props.buttonContent}</Button>
	</>
)

TextButton.propTypes = {}

TextButton.defaultProps = {}

export default TextButton
