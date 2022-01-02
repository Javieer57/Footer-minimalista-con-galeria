# Footer minimalista con galería de fotos

Footer con estilo minimalsita para sitio web, integrado con una galería hecha con Owl Carousel (plugin JQuery).

![](./screenshot.png)

## Tabla de contenido

-   [Links](#links)
-   [Mi proceso](#mi-proceso)
    -   [Construido con](#construido-con)
    -   [Lo aprendido](#lo-aprendido)
-   [Autor](#autor)

## Links

-   [Github page](https://javieer57.github.io/Footer-minimalista-con-galeria/)

## Mi proceso

### Construido con

-   HTML5 Semántico
-   CSS custom properties
-   Flexbox
-   [Google fonts](https://fonts.google.com/)
-   [Fontawesome](https://fontawesome.com/) - Librería de iconos
-   [JQuery](https://jquery.com/) - Libería JS
-   [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) - Plugin JQuery
-   [SASS](https://sass-lang.com/) - Preprocesador CSS

### Lo aprendido

Durante este proyecto aprendí a utilizar el plugin de Owl Carousel para construir una galería adaptable a dispositivos móviles.

A continuación comparto la configuración que utilicé para este proyecto y que se puede encontrar en `app/script.js`:

```javascript
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
```

## Autor

-   Portfolio - https://javieereufracio.com
-   Github - [@Javieer57](https://github.com/Javieer57)
-   Codepen - [@Javieer57](https://codepen.io/Javieer57)
-   Instagram - [@javieer_eufracio](https://www.instagram.com/javieer_wd/)
-   Frontend Mentor - [@Javieer57](https://www.frontendmentor.io/profile/Javieer57)
