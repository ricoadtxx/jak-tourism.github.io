// Navbar Fixed //
window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
	} else {
		header.classList.remove("navbar-fixed");
	}
};

// Hamburger //
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});

var lastScrollTop = 0;

window.addEventListener("scroll", function () {
	var currentScroll = window.scrollY;
	var sections = document.querySelectorAll(".reset-aos");

	sections.forEach(function (section) {
		var sectionTop = section.getBoundingClientRect().top;

		if (currentScroll > lastScrollTop) {
			if (sectionTop <= 0 && sectionTop <= window.innerHeight) {
				section.classList.add("aos-init");
				section.classList.remove("aos-animate");
			}
		} else {
			if (sectionTop >= 0 && sectionTop <= window.innerHeight) {
				section.classList.remove("aos-init");
				section.classList.add("aos-animate");
			}
		}
	});

	lastScrollTop = currentScroll;
});

var map2 = document.getElementById("map2");
var contentBelowMap = document.getElementById("contentBelowMap");
var navbar = document.getElementsByTagName("header")[0];
var sectionBatas = document.getElementById("mapGIS");

var navbarHeight = navbar.clientHeight;

window.addEventListener("scroll", function () {
	var scrollTop = window.scrollY;
	var batasPosisi = sectionBatas.getBoundingClientRect().top + window.scrollY;

	if (scrollTop >= batasPosisi) {
		map2.style.position = "fixed";
		map2.style.top = navbarHeight + "px";
		contentBelowMap.style.position = "relative"; // Mengatur elemen-elemen berada di bawah div peta menjadi relative
		contentBelowMap.style.top = map2.clientHeight + navbarHeight + "px"; // Geser elemen-elemen ke bawah div peta
	} else if (scrollTop < batasPosisi) {
		map2.style.position = "relative";
		map2.style.top = "0";
		contentBelowMap.style.position = "static"; // Kembalikan elemen-elemen ke posisi statis
	}
});

const cards = document.querySelectorAll(".card-preference");
const cardToggles = document.querySelectorAll(".btn-card");

cardToggles.forEach(function (toggle, index) {
	toggle.addEventListener("click", function () {
		cards.forEach(function (card, i) {
			if (i !== index) {
				card.classList.remove("active");
			}
		});
		cards[index].classList.toggle("active");
	});
});
