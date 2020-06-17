/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const VertBox = (props) => (
	<div
		{...props}
		sx={{
			transform: 'rotate(90deg)',
			transformOrigin: '.6em .6em',
			lineHeight: '1em',
			display: 'inline-block',
			fontSize: '3em',
			fontFamily: 'arial',
			textTransform: 'uppercase',
			fontWeight: '800',
			letterSpacing: 'tight',
			position: 'absolute',
			zIndex: 3,
			color: 'muted',
			textShadow: '1px 1px 2px black',
		}}
	>
		{props.children}
	</div>
)

VertBox.propTypes = {}

VertBox.defaultProps = {}

export default VertBox
