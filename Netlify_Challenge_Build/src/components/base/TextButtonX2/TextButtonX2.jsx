/** @jsx jsx */
import { jsx, Text, Button } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const TextButtonX2 = (props) => (
	<>
		<Text marginBottom='4' variant={props.textVariant}>
			{props.textText}
		</Text>
		<Button variant={props.buttonVariant}>{props.buttonContent}</Button>
		<Button variant={props.buttonVariant2}>{props.buttonContent2}</Button>
	</>
)

TextButtonX2.propTypes = {}

TextButtonX2.defaultProps = {}

export default TextButtonX2
