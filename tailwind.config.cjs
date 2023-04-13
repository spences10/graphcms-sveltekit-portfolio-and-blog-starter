const daisyui = require('daisyui')
const typography = require('@tailwindcss/typography')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		}
	},

	plugins: [typography, daisyui]
}

module.exports = config
