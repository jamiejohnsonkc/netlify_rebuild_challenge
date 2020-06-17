/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

const ImageWCaption = (props) => (
	<>
		{props.compImage}
		<Text
			sx={{
				p: 2,
				variant: 'text.caption',
			}}
		>
			{props.captionText}
		</Text>
	</>
)

export default ImageWCaption

ImageWCaption.propTypes = {}

ImageWCaption.defaultProps = {}
