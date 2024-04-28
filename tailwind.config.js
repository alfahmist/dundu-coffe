/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		fontFamily: {
			display: ['Poppins'],
		},
		extend: {
			animation: {
				wiggle: 'wiggle .6s',
			},
		},
	},
	plugins: [],
};
