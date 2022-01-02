/* Reemplazar los data-feather="" por iconos SVG */
feather.replace();

/* Ejecutar la librería de Owl carousel

Fuente: https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html */
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		center: true,
		items: 2,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			600: {
				items: 4,
			},
			1300: {
				items: 6,
			},
		},
	});
});