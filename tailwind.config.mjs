/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			colors: {
				icterine: '#fbfd5d',
				cinder: '#25292f',
				telemagenta: '#da3675',
				fountainBlue: '#61c2bc',
				stormDust: '#636363' /* light gray */,
			},
			maxWidth: {
				pageWidth: '1440px',
			},
			padding: {
				leftGutter: '60px',
			},
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			wide: ['Krona One', 'sans-serif'],
			condensed: ['Bebas Neue', 'sans-serif'],
		},
	},
	plugins: [],
	safelist: ['small', 'large'],
}
