/** @type {import('tailwindcss/types/config').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
		// 	animation: {
		// 		'btn-gradient': 'btn-gradient 0.75s linear infinite',
				
		// 		//move:'move 3s infinite',
		// 	},
		// 	keyframes: {
		// 			'btn-gradient': {
        // to: { transform: 'translateX(-25%)' },
        // },
		// 	},
		// 	transitionProperty: {
		// 		translate: 'translate',
		// 	},
			
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		// Agrega una utilidad para aplicar estilos al pseudo-elemento `::before`
		// plugin(function ({ addUtilities, addVariant }) {
		// 	addUtilities({
		// 		'.btn-before': {
		// 		content: '""',
		// 		position: 'absolute',
		// 		top: '0',
		// 		left: '0',
		// 		width: '400%',
		// 		height: '100%',
		// 		opacity: '0',
		// 		background:'linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b)',
		// 		backgroundSize: '25% 100%',
		// 		animation:'btn-gradient 0.75s linear infinite',
		// 		translate: '-5% 0%',
		// 		transition: 'translate 0.25s ease-out, opacity 0.175s ease-out',
		// 		},
		// 		'.btn-before-hover': {
		// 		opacity: '1',
				
		// 		transitionDuration: '0.75s',
		// 		translate: '0% 0%',
		// 		},

		// 	});
		// 	}),	
		// 	plugin(function ({ addUtilities }) {
		// 		addUtilities({
		// 		'.animation-running': {
		// 			'animation-play-state': 'running',
		// 		},
		// 		});
		// 	}),	
	],
}
