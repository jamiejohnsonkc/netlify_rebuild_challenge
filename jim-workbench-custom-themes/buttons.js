import { text } from './index'

export default {
	fontStyle: {
		fontFamily: 'heading',
		fontWeight: '600',
		textTransform: 'uppercase',
		letterSpacing: 'normal',
		fontSize: [0],
	},
	primary: {
		color: 'background',
		bg: 'primary',
		borderColor: 'primary',
		variant: 'buttons.fontStyle',
		'&:hover': {
			color: 'background',
			bg: 'accent',
			borderColor: 'accent',
		},
	},
	secondary: {
		color: 'background',
		bg: 'secondary',
		borderColor: 'secondary',
		variant: 'buttons.fontStyle',
		'&:hover': {
			color: 'background',
			bg: 'accent',
			borderColor: 'accent',
		},
	},
	accent: {
		color: 'background',
		bg: 'accent',
		borderColor: 'accent',
		variant: 'buttons.fontStyle',
		'&:hover': {
			color: 'background',
			bg: 'primary',
			borderColor: 'primary',
		},
	},

	reverse: {
		primary: {
			color: 'primary',
			bg: 'transparent',
			borderColor: 'primary',
			variant: 'buttons.fontStyle',
			'&:hover': {
				color: 'background',
				bg: 'primary',
				borderColor: 'primary',
			},
		},
		secondary: {
			color: 'secondary',
			bg: 'transparent',
			borderColor: 'secondary',
			variant: 'buttons.fontStyle',
			'&:hover': {
				color: 'background',
				bg: 'secondary',
				borderColor: 'secondary',
			},
		},
		accent: {
			color: 'accent',
			bg: 'transparent',
			borderColor: 'accent',
			variant: 'buttons.fontStyle',
			'&:hover': {
				color: 'background',
				bg: 'accent',
				borderColor: 'accent',
			},
		},
	},

	pill: {
		primary: {
			borderRadius: 32,
			variant: 'buttons.primary',
		},
		secondary: {
			borderRadius: 32,
			variant: 'buttons.secondary',
		},
		accent: {
			borderRadius: 32,
			variant: 'buttons.accent',
		},
	},
	reversePill: {
		primary: {
			borderRadius: 32,
			variant: 'buttons.reverse.primary',
		},
		secondary: {
			borderRadius: 32,
			variant: 'buttons.reverse.secondary',
		},
		accent: {
			borderRadius: 32,
			variant: 'buttons.reverse.accent',
		},
	},
	sharp: {
		primary: {
			borderRadius: 0,
			variant: 'buttons.primary',
		},
		secondary: {
			borderRadius: 0,
			variant: 'buttons.secondary',
		},
		accent: {
			borderRadius: 0,
			variant: 'buttons.accent',
		},
	},
	reverseSharp: {
		primary: {
			borderRadius: 0,
			variant: 'buttons.reverse.primary',
		},
		secondary: {
			borderRadius: 0,
			variant: 'buttons.reverse.secondary',
		},
		accent: {
			borderRadius: 0,
			variant: 'buttons.reverse.accent',
		},
	},
	scrollTop: {
		fixed: {
			position: 'fixed',
			zIndex: 4,
			bottom: '2em',
			right: '2em',
		},
	},
}

//add variants for box, pill, rounded, outline, solid
