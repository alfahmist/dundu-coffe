/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			animation: {
				wiggle: 'wiggle .6s',
			},
			keyframes: {
				wiggle: {
					'0%': { top: '0' },
					'100%': { top: '100px' },
				},
			},
		},
	},
	plugins: [],
};
