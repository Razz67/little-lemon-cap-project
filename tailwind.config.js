/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,html}"],
	theme: {
		extend: {
			colors: {
				50: "#eff6ff",
				100: "#dbeafe",
				200: "#bfdbfe",
				300: "#93c5fd",
				400: "#60a5fa",
				500: "#3b82f6",
				600: "#2563eb",
				700: "#1d4ed8",
				800: "#1e40af",
				900: "#1e3a8a",
				950: "#172554",
				olive: "#495E57",
				lemon: "#f4ce14",
				salmon: "#ee9972",
				pink: "#fbdabb",
				gray: "#edefee",
				forest: "#333333",
				white: "#FFFFFF",
				red: "#FF6347",
			},
			fontFamily: {
				body: ["Karla", "Markazi Text", "sans-serif"],
			},
		},
	},
};
