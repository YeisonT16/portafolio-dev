/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			// animation: {
			// 	box: 'box 3s infinite',
			// 	move:'move 3s infinite',
			// },
			// 	keyframes: {
			// 	box: {
			// 		'0%': {boxShadow: '#27272c' },
			// 		'50%': {boxShadow: '0 0 25px cyan'},
			// 		'100%': { boxShadow: '#27272c' },
			// 	},
			// 	move: {
			// 		'0%': {
			// 			transform: translateX(0),
			// 		},
			// 		'50%': {
			// 			transform: translateX('5px'),
			// 		},
			// 		'100%': {
			// 			transform: translateX(0),
			// 		}
			// 	},
			// },
		},
	},
	variants: {
		extend: {
			before: ['hover'],
		},
	},
	plugins: [],
}
