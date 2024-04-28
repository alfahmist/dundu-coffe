/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		fontFamily: {
			display: ['Poppins'],
		},
		extend: {
			transitionProperty: {
				height: 'height',
				'max-height': 'height',
			},
			animation: {
				wiggle: 'wiggle .6s',
				slide: 'slide 1s linear',
			},
			keyframes: {
				wiggle: {
					'0%': { top: '0' },
					'100%': { top: '100px' },
				},
				slide: {
					'0%': { height: '0' },
					// '50%': { height: '100px' },
					'100%': { height: '100' },
				},
			},
		},
	},
	plugins: [],
};
