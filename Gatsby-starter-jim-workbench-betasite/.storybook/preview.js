import React from 'react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'theme-ui'
import { addDecorator, addParameters } from '@storybook/react'
import theme from '../src/gatsby-plugin-theme-ui'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import './storybookbrowserstyles.css'

addParameters({
	options: {
		panelPosition: 'bottom',
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
})
// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context. We override it to empty functions (no-op),
// so gatsby link doesn't throw any errors.
global.___loader = {
	enqueue: () => {},
	hovering: () => {},
}

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash we need to set it as well.
global.__PATH_PREFIX__ = ''
global.__BASE_PATH__ = ''

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In storybook it doesn't make sense to do an actual navigate, instead we want to log an action. Checkout the actions addon docs https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = (pathname) => {
	action('NavigateTo:')(pathname)
}

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
