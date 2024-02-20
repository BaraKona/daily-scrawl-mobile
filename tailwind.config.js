/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "#151414",
				text: "#d0d0d0",
				border: "#222222",
				hr: "#b0b0b0",
				hrDark: "#2f2f2f",
				lightBorder: "#b0b0b0",
				hoverDark: "#1f1f1f",
				hoverLight: "#e0e0e0",
			},
		},
	},
	plugins: [],
};
