/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	// content: [
	//   "./index.html",
	//   "./src/**/*.{js,jsx,ts,tsx}",
	//   "./**/*.{js,jsx,ts,tsx}",
	// ],
	theme: {
		extend: {
			minHeight: {
				screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
			},
			colors: {
				background: '#FDF8F6',
				categoryText: '#AC9E9B',
				name: '#1E140F',
				price: '#9D4B36',
				addToCartText: '#483E3C',
				addToCartIcon: '#934C2C',
				addToCartBg: '#FFFEFF',
				addToCartBorder: '#9F9190',
				addToCartBgClicked: '#C83B0D',
				cartTitle: '#B5441D',
				cartItemName: '#574E49',
				cartSinglePrice: '#A49695',
				cartItemPrice: '#857774',
				confirmButton: '#952C0C',
			},
			screens: {
				xs: '390px',
				sm: '641px',
				md: '768px',
				lg: '1025px',
				tablet: '641px',
				desktop: '1025px',
			},
		},
	},
	plugins: [require('tailwindcss-touch')()],
};
