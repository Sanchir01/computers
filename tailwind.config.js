/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-button": "#FF40DD",
				"border-button": "#9D38E8",
			},
		},
	},

	plugins: [],
};
