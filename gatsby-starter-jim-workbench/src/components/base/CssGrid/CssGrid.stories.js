import React from 'react'
import CssGrid from './CssGrid'

export default {
	title: 'CssGrid',
}

export const standard = (props) => (
	<CssGrid gridWidth={null} gridGap={2} gridColumns={[2, null, 4]} />
)
