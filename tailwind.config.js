/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			backgroundImage: {
				home: "url('img/home.png')",
				home_mobile: "url('img/home-mobile.png')",
				home_tablet: "url('img/home-md.png')",
				about: "url('img/2.svg')",
				jakarta: "url('img/jakarta1.jpg')",
				jakarta1: "url('img/bg-jakarta.jpg')",
				logo: "url('img/logo2.png')",
				jakarta_mobile: "url('img/bg-jakarta-phone.jpg')",
			},
			animation: {
				// Bounces 5 times 1s equals 5 seconds
				"bounce-short": "bounce 1s ease-in-out 5",
			},
			fontFamily: {
				etb: "Edu TAS Beginner, cursive",
				kenia: "Kenia, sans-serif",
				anton: "Anton, sans-serif",
				butcherman: "Butcherman",
				bayon: "Bayon",
				kenia: "Kenia, sans-serif",
			},
			colors: {
				primary: "#045ddb",
				secondary: "#fad9b1",
				third: "#434e50",
				fourth: "#6683b3",
				fifth: "#314b4c",
			},
		},
	},
	plugins: [],
};
