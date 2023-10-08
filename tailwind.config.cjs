/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1800px'
			},
			colors: {
				charcoal: '#0E1217'
			}
		}
	},
	plugins: []
};
