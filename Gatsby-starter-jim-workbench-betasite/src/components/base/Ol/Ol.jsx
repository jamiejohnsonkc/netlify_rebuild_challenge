/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import { content } from './New-My-JSON-Content.json'

const Ol = (props) => (
	<>
		<ol variant={props.olVariant}>
			{content.map((data, index) => {
				return (
					<li
						{...props}
						sx={{
							paddingBottom: 2,
						}}
						key={`content_item_${index}`}
					>
						{data.item}
					</li>
				)
			})}
		</ol>
	</>
)

Ol.propTypes = {}

Ol.defaultProps = {}

export default Ol
