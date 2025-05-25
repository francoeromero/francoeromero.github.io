/*
 * Magazine sample
*/

function cargarEnlace( ruta,ancho, largo, posicionY, posicionX) {
    let contenedorVideo = $('<div></div>').css({
        width: ancho,
        height: largo,
        top: posicionY,
        left: posicionX,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999999', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        zIndex: '999999',
    });

    // Crear el iframe para el video de YouTube
    let iframe = $('<iframe></iframe>')
        .attr('src', `https://www.youtube.com/embed/${ruta}?autoplay=1&mute=1&controls=1`)
        .attr('frameborder', '0')
        .attr('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
        .attr('allowfullscreen', true)
        .css({
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            backgroundSize: 'cover',
        });

    contenedorVideo.append(iframe);
    return contenedorVideo;
}




function cargarGif_flexible(ruta,ancho,largo,ubicacion_x, ubicacion_y, posicion){
	let pos = '';
	if (posicion == false){
		pos = 'cover';
	}else if (posicion == true){
		pos = 'contain';
	}	
	
	let cargarGif = $('<div></div>').css({
		// Definir el ancho del cuadrado en 100 píxeles
		width: ancho,
		// Definir la altura del cuadrado en 100 píxeles
		height: largo,
		// Asignar el fondo rojo al cuadrado
		background: `url(${ruta}) no-repeat center center`,
		backgroundSize: 'cover',
		zIndex: '999',
		// Posicionar el cuadrado de forma absoluta dentro del contenedor
		position: pos,
		// Colocar el cuadrado en la parte superior del contenedor
		top: ubicacion_x,
		// border: '3px solid white',
		// Colocar el cuadrado en la esquina izquierda del contenedor
		left: ubicacion_y,
		// Asegurar que el cuadrado se superponga a otros elementos mediante un z-index alto
		transform: 'translate(-50%,-50%)',
		zIndex: '1000'
	});
	return cargarGif
}
function cargarVideo_flexible(ruta, ancho, largo, posicionX, posicionY, backgroundSize) {
    let cargarVideo = $('<div></div>').css({
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: posicionY,
        left: posicionX,
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        overflow: 'hidden'
    });

    let video = $('<video autoplay loop muted playsinline></video>').css({
        width: '100%',
        height: '100%',
        objectFit: backgroundSize
    }).append(`<source src="${ruta}" type="video/mp4">`);

    // Reproducir nuevamente cuando termine
    video.on('ended', function() {
        video[0].play();
    });

    // Agregar el video al contenedor
    cargarVideo.append(video);

    return cargarVideo;
}
function cargarWebp_1(ruta){
	let cargarGif = $('<div></div>').css({
		// Definir el ancho del cuadrado en 100 píxeles
		width: '70%',
		// Definir la altura del cuadrado en 100 píxeles
		height: '55%',
		// Asignar el fondo rojo al cuadrado
		background: `url(${ruta}) no-repeat center center`,
		backgroundSize: 'cover',
		zIndex: '999',
		// Posicionar el cuadrado de forma absoluta dentro del contenedor
		position: 'absolute',
		// Colocar el cuadrado en la parte superior del contenedor
		top: '70%',
		// border: '3px solid white',
		// Colocar el cuadrado en la esquina izquierda del contenedor
		left: '55%',
		// Asegurar que el cuadrado se superponga a otros elementos mediante un z-index alto
		transform: 'translate(-50%,-50%)',
		zIndex: '1000'
	});
	return cargarGif
}



function cargarWebp_2(ruta){
	let cargarGif = $('<div></div>').css({
		// Definir el ancho del cuadrado en 100 píxeles
		width: '80%',
		// Definir la altura del cuadrado en 100 píxeles
		height: '55%',
		// Asignar el fondo rojo al cuadrado
		background: `url(${ruta}) no-repeat center center`,
		backgroundSize: 'cover',
		zIndex: '999',
		// Posicionar el cuadrado de forma absoluta dentro del contenedor
		position: 'absolute',
		// Colocar el cuadrado en la parte superior del contenedor
		top: '70%',
		// border: '3px solid white',
		// Colocar el cuadrado en la esquina izquierda del contenedor
		left: '53%',
		// Asegurar que el cuadrado se superponga a otros elementos mediante un z-index alto
		transform: 'translate(-50%,-50%)',
		zIndex: '1000'
	});
	return cargarGif
}
function cargarWebp_3(ruta){
	let cargarGif = $('<div></div>').css({
		// Definir el ancho del cuadrado en 100 píxeles
		width: '80%',
		// Definir la altura del cuadrado en 100 píxeles
		height: '69%',
		// Asignar el fondo rojo al cuadrado
		background: `url(${ruta}) no-repeat center center`,
		backgroundSize: 'cover',
		zIndex: '999',
		// Posicionar el cuadrado de forma absoluta dentro del contenedor
		position: 'absolute',
		// Colocar el cuadrado en la parte superior del contenedor
		top: '63%',
		// border: '3px solid white',
		// Colocar el cuadrado en la esquina izquierda del contenedor
		left: '53%',
		// Asegurar que el cuadrado se superponga a otros elementos mediante un z-index alto
		transform: 'translate(-50%,-50%)',
		zIndex: '1000'
	});
	return cargarGif
}



function cargarGif_2(rutaUno,rutaDos){
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		zIndex: '1000'
	});

	let gifSuperior = $('<div></div>').css({
		width: '100%',
		height: '50%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifInferior = $('<div></div>').css({
		width: '100%',
		height: '50%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	contenedor.append(gifSuperior);
	contenedor.append(gifInferior);
	return contenedor;
}
// ///////////////////////////////////////////
function cargarActivadorVideo(){
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		background: 'rgba(255, 0, 0, 0.5)',
		zIndex: '99999999'
	});

	return contenedor;
}
// ///////////////////////////////////////////

function cargarGif_3(rutaUno, rutaDos, rutaTres) {
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		zIndex: '1000'
	});

	let gifSuperior = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifMedio = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifInferior = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaTres}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	contenedor.append(gifSuperior);
	contenedor.append(gifMedio);
	contenedor.append(gifInferior);

	return contenedor;
}

function cargarGif_4(rutaUno, rutaDos, rutaTres, rutaCuatro) {
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		zIndex: '1000'
	});

	let gifSuperior = $('<div></div>').css({
		width: '100%',
		height: '25%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifMedioUno = $('<div></div>').css({
		width: '100%',
		height: '25%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover',
	});
	let gifMedioDos = $('<div></div>').css({
		width: '100%',
		height: '25%',
		background: `url(${rutaTres}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifInferior = $('<div></div>').css({
		width: '100%',
		height: '25%',
		background: `url(${rutaCuatro}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	contenedor.append(gifSuperior);
	contenedor.append(gifMedioUno);
	contenedor.append(gifMedioDos);
	contenedor.append(gifInferior);

	return contenedor;
}

function cargarGif_trama1(rutaUno, rutaDos, rutaTres, rutaCuatro,rutaCinco) {
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		display: 'flex',
		flexDirection: 'column',
		// gap: '2px' 
	});

	// Fila 1 - Dos GIFs (50% - 50%)
	let fila1 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		display: 'flex'
	});
	let gifSuperiorIzq = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover'
	});
	let gifSuperiorDer = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Fila 2 - Dos GIFs (50% - 50%)
	let fila2 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		display: 'flex'
	});
	let gifMedioIzq = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaTres}) no-repeat center center`,
		backgroundSize: 'cover'
	});
	let gifMedioDer = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaCuatro}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Fila 3 - Un solo GIF (100%)
	let fila3 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaCinco}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Agregar elementos al contenedor
	fila1.append(gifSuperiorIzq, gifSuperiorDer);
	fila2.append(gifMedioIzq, gifMedioDer);
	contenedor.append(fila1, fila2, fila3);

	return contenedor;
}
function cargarGif_trama2(rutaUno, rutaDos, rutaTres, rutaCuatro) {
    let contenedor = $('<div></div>').css({
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '33.33% 33.33% 33.33%',
        // gap: '2px' 
    });

    let gifSuperiorIzq = $('<div></div>').css({
        background: `url(${rutaUno}) no-repeat center center`,
        backgroundSize: 'cover'
    });

    let gifMedioIzq = $('<div></div>').css({
        background: `url(${rutaDos}) no-repeat center center`,
        backgroundSize: 'cover'
    });

    let gifDerecha = $('<div></div>').css({
        background: `url(${rutaTres}) no-repeat center center`,
        backgroundSize: 'cover',
        gridRow: '1 / 3' // Hace que este div ocupe dos filas
    });

    let gifInferior = $('<div></div>').css({
        background: `url(${rutaCuatro}) no-repeat center center`,
        backgroundSize: 'cover',
        gridColumn: '1 / 3' // Hace que este div ocupe ambas columnas
    });

    // Agregar elementos al contenedor
    contenedor.append(gifSuperiorIzq);
    contenedor.append(gifMedioIzq);
    contenedor.append(gifDerecha);
    contenedor.append(gifInferior);

    return contenedor;
}
function cargarGif_trama3(rutaUno, rutaDos, rutaTres, rutaCuatro) {
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		display: 'flex',
		flexDirection: 'column',
		// gap: '2px' 
	});



	// Fila 1 - Dos GIFs (50% - 50%)
	let fila1 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover'
	});


	// Fila 2 - Dos GIFs (50% - 50%)
	let fila2 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		display: 'flex'
	});
	let gifMedioIzq = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover'
	});
	let gifMedioDer = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaTres}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Fila 3 - Un solo GIF (100%)
	let fila3 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaCuatro}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Agregar elementos al contenedor
	fila2.append(gifMedioIzq, gifMedioDer);
	contenedor.append(fila1, fila2, fila3);

	return contenedor;
}

function cargarMp4(ruta,escala,posicionX,posicionY){
	let contenedorVideo = $('<div></div>').css({
		width: '45%',
		height: '38%',
		left: posicionX,
		top: posicionY,
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		zIndex: '9999999', 
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'black',
		alignItems: 'center',
		zIndex:'999999',
		objectFit: 'contain',
		backgroundSize: 'cover',
		scale: escala
	});

	let cargarVideo = $('<video></video>')
	.attr('src', ruta)

	.attr('autoplay', true)
	.attr('muted', true) 
	.css({
		width: '105%',
		height: '105%',
		
	});
	contenedorVideo.append(cargarVideo);
	return contenedorVideo
}
function cargarMp4_2(ruta,escala,posicionX,posicionY){
	let contenedorVideo = $('<div></div>').css({
		width: '56%',
		height: '46%',
		left: posicionX,
		top: posicionY,
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		zIndex: '9999999', 
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'rgba(255, 255, 255, 0.9)',
		alignItems: 'center',
		zIndex:'999999',
		objectFit: 'contain',
		backgroundSize: 'cover',
		scale: escala
	});

	let cargarVideo = $('<video></video>')
	.attr('src', ruta)
	.attr('autoplay', true)
	.attr('muted', true) 
	.css({
		width: '105%',
		height: '105%',
		
	});
	contenedorVideo.append(cargarVideo);
	return contenedorVideo
}

let flag_responsivo = true;
function checkResponsive(){
	if(window.matchMedia('(max-width: 1400px)').matches){
		flag_responsivo = false;
	}
	else{
		flag_responsivo = true;
	}
	console.log('ACTIVADO PARA CELULAR');
}
checkResponsive();

function addPage(page, book) {

	var id, pages = book.turn('pages');

	// Create a new element for this page
	var element = $('<div />', {});
	let flag = true;
	const nextButton = document.querySelector('.next-button');
	const previousButton = document.querySelector('.previous-button');


	// Add the page to the flipbook
	if (book.turn('addPage', element, page)) {
		// LISTAS
		lista_mp4 = [
			'./video/0.mp4',
			'./video/1.mp4',
			'./video/2.mp4',
			'./video/3.mp4',
			'./video/4.mp4',
			'./video/5.mp4',
			'./video/6.mp4',
		];
		lista_webp = [
			'./webp/pc/0.webp',
			'./webp/pc/1.webp',
			'./webp/pc/2.webp',
			'./webp/pc/3.webp',
			'./webp/pc/4.webp',
			'./webp/pc/5.webp',
			'./webp/pc/6.webp'
		];
		// '#'desactivado imagenes estaticas para cel 
		lista_webp_iphone = [
			'#',
			'#',
			'#',
			'#',
			'#',
			'#',
			'#'
		];
		lista_webp_android = [
			'./webp/pc/0.webp',
			'./webp/pc/1.webp',
			'./webp/pc/2.webp',
			'./webp/pc/3.webp',
			'./webp/pc/4.webp',
			'./webp/pc/5.webp',
			'./webp/pc/6.webp'
		];
		// Add the initial HTML
		// It will contain a loader indicator and a gradient
		element.html('<div class="gradient"></div><div class="loader"></div>');
		/////////////////////////////////
		// IPHONE
		/////////////////////////////////
		if (/iPhone/i.test(navigator.userAgent)){
			if(page == 33){
				if(flag_responsivo == false){
					// video = cargarMp4(lista_mp4[0],'1.45','64%','79%');
					// element.append(video);
					webp = cargarWebp_2(lista_webp_iphone[0]);
					element.append(webp);
				}

			}
			else if(page == 35){
				if(flag_responsivo == false){
					// video = cargarMp4(lista_mp4[1],'1.45','64%','79%');
					// element.append(video);
					webp = cargarWebp_2(lista_webp_iphone[1]);
					element.append(webp);
				}
			}
			else if(page == 37){
				if(flag_responsivo == false){
					// video = cargarMp4_2(lista_mp4[2],'1.45','64%','71%');
					// element.append(video);
					webp = cargarWebp_3(lista_webp_iphone[2]);
					element.append(webp);
				}
			}
			else if(page == 39){
				if(flag_responsivo == false){
					// video = cargarMp4_2(lista_mp4[3],'1.45','64%','71%');
					// element.append(video);
					webp = cargarWebp_3(lista_webp_iphone[3]);
					element.append(webp);
				}
			}
			else if(page == 41){
				if(flag_responsivo == false){
					// video = cargarMp4_2(lista_mp4[4],'1.45','64%','71%');
					// element.append(video);
					webp = cargarWebp_3(lista_webp_iphone[4]);
					element.append(webp);
				}
			}
			else if(page == 43){
				if(flag_responsivo == false){
					// video = cargarMp4_2(lista_mp4[5],'1.45','64%','71%');
					// element.append(video);
					webp = cargarWebp_3(lista_webp_iphone[5]);
					element.append(webp);
				}
			}
			else if(page == 45){
				if(flag_responsivo == false){
					// video = cargarMp4_2(lista_mp4[6],'1.45','64%','71%');
					// element.append(video);
					webp = cargarWebp_3(lista_webp_iphone[6]);
					element.append(webp);
				}
			}
		}
		/////////////////////////////////
		// ANDROID Y PC
		///////////////////////////////// 
		else{
			
			if(page == 33){
				if(flag_responsivo == false){
					// andriid
					webp = cargarWebp_2(lista_webp_android[0]);
					element.append(webp);
				}
				// pc
				else if(flag_responsivo == true){
					webp = cargarWebp_2(lista_webp[0]);
					element.append(webp);
				}
			}
			else if(page == 35){
				if(flag_responsivo == false){
					// andriid
					webp = cargarWebp_2(lista_webp_android[1]);
					element.append(webp);
				}
				// pc
				else if(flag_responsivo == true){
					webp = cargarWebp_2(lista_webp[1]);
					element.append(webp);
				}
			}
			else if(page == 37){
				if(flag_responsivo == false){
					// andriid
					webp = cargarWebp_3(lista_webp_android[2]);
					element.append(webp);
				}
				// pc
				else if(flag_responsivo == true){
					webp = cargarWebp_3(lista_webp[2]);
					element.append(webp);
				}
			}
			else if(page == 39){
				if(flag_responsivo == false){
					// andriid
					webp = cargarWebp_3(lista_webp_android[3]);
					element.append(webp);
				}
				// pc
				else if(flag_responsivo == true){
					webp = cargarWebp_3(lista_webp[3]);
					element.append(webp);
				}
			}
			else if(page == 41){
				if(flag_responsivo == false){
					// andriid
					webp = cargarWebp_3(lista_webp_android[4]);
					element.append(webp);
				}
				// pc
				else if(flag_responsivo == true){
					webp = cargarWebp_3(lista_webp[4]);
					element.append(webp);
				}
			}

			else if(page == 43){
				if(flag_responsivo == false){
					// andriid
					webp = cargarWebp_3(lista_webp_android[5]);
					element.append(webp);
				}
				// pc
				else if(flag_responsivo == true){
					webp = cargarWebp_3(lista_webp[5]);
					element.append(webp);
				}
			}
			else if(page == 45){
				if(flag_responsivo == false){
					// andriid
					webp = cargarWebp_3(lista_webp_android[6]);
					element.append(webp);
				}
				// pc
				else if(flag_responsivo == true){
					webp = cargarWebp_3(lista_webp[6]);
					element.append(webp);
				}
			}
		}

		// Load the page
		loadPage(page, element);
	}

}

function loadPage(page, pageElement) {

	// Create an image element

	var img = $('<img />');

	img.on('mousedown', function(e) {
		e.preventDefault();
	});

	img.on('load', function() {
		
		// Set the size
		$(this).css({width: '100%', height: '100%'});

		// Add the image to the page after loaded

		$(this).appendTo(pageElement);

		// Remove the loader indicator
		
		pageElement.find('.loader').remove();
	});

	// Load the page

	img.attr('src', 'pages/' +  page + '.jpg');
	
	loadRegions(page, pageElement);
	


	// ////////////////////////////////////////------------------------------/////////////////////////////////////////
	if(page == 31 && /iPhone/i.test(navigator.userAgent)){
		if(flag_responsivo == false){

			let contenedor = $('<div></div>').css({
				width: '70%',
				height: '50%',
				bottom:40,
				right:60,
				position:'absolute',
				background: 'rgba(0,0,0,0)',
				zIndex: '99999999',
				display: 'flex',
				justifyContent: 'center', // Centra horizontalmente el contenido
				alignItems: 'center', // Centra verticalmente el contenido
				cursor: 'pointer',
			}).addClass('testeando')
			let texto = $('<p></p>').text('CLICK PARA REPRODUCIR').css({
				color: 'black',
				fontSize: '20px',
				userSelect: 'none',
				fontWeight: '400',
				textAlign: 'center',
				background: 'rgba(255, 255, 255, 1)', // Fondo semitransparente para mejor visibilidad
				padding: '10px 20px',
				borderRadius: '5px',
				'font-family': "'Quicksand', sans-serif",
				zIndex: 999999,
			});
			contenedor.append(texto);


			contenedor.click(function() {
				createVideoElement('./video/0.mp4');
			});
			pageElement.append(contenedor);
		}
	}
	else if(page == 33 && /iPhone/i.test(navigator.userAgent)){
		if(flag_responsivo == false){
			let contenedor = $('<div></div>').css({
				width: '70%',
				height: '50%',
				bottom:40,
				right:60,
				position:'absolute',
				background: 'rgba(0,0,0,0)',
				zIndex: '99999999',
				display: 'flex',
				justifyContent: 'center', // Centra horizontalmente el contenido
				alignItems: 'center', // Centra verticalmente el contenido
				cursor: 'pointer',
			}).addClass('testeando')
			let texto = $('<p></p>').text('CLICK PARA REPRODUCIR').css({
				color: 'black',
				fontSize: '20px',
				fontWeight: '400',
				userSelect: 'none',
				textAlign: 'center',
				background: 'rgba(255, 255, 255, 1)', // Fondo semitransparente para mejor visibilidad
				padding: '10px 20px',
				borderRadius: '5px',
				'font-family': "'Quicksand', sans-serif",
				zIndex: 999999,
			});
			contenedor.append(texto);


			contenedor.click(function() {
				createVideoElement('./video/1.mp4');
			});
			pageElement.append(contenedor);
		}}
	else if(page == 35 && /iPhone/i.test(navigator.userAgent)){
		if(flag_responsivo == false){
			let contenedor = $('<div></div>').css({
				width: '70%',
				height: '50%',
				bottom:40,
				right:60,
				position:'absolute',
				background: 'rgba(0,0,0,0)',
				zIndex: '99999999',
				display: 'flex',
				justifyContent: 'center', // Centra horizontalmente el contenido
				alignItems: 'center', // Centra verticalmente el contenido
				cursor: 'pointer',
				transform: 'translateY(-15%)'
			}).addClass('testeando')
			let texto = $('<p></p>').text('CLICK PARA REPRODUCIR').css({
				color: 'black',
				fontSize: '20px',
				fontWeight: '400',
				userSelect: 'none',
				textAlign: 'center',
				background: 'rgba(255, 255, 255, 1)', // Fondo semitransparente para mejor visibilidad
				padding: '10px 20px',
				borderRadius: '5px',
				'font-family': "'Quicksand', sans-serif",
				zIndex: 999999,
			});
			contenedor.append(texto);

			contenedor.click(function() {
				createVideoElement('./video/2.mp4');
			});
			pageElement.append(contenedor);
		}}
	else if(page == 37 && /iPhone/i.test(navigator.userAgent)){
		if(flag_responsivo == false){
			let contenedor = $('<div></div>').css({
				width: '70%',
				height: '50%',
				bottom:40,
				right:60,
				position:'absolute',
				background: 'rgba(0,0,0,0)',
				zIndex: '99999999',
				display: 'flex',
				justifyContent: 'center', // Centra horizontalmente el contenido
				alignItems: 'center', // Centra verticalmente el contenido
				cursor: 'pointer',
				transform: 'translateY(-15%)'
			}).addClass('testeando')
			let texto = $('<p></p>').text('CLICK PARA REPRODUCIR').css({
				color: 'black',
				fontSize: '20px',
				fontWeight: '400',
				userSelect: 'none',
				textAlign: 'center',
				background: 'rgba(255, 255, 255, 1)', // Fondo semitransparente para mejor visibilidad
				padding: '10px 20px',
				borderRadius: '5px',
				'font-family': "'Quicksand', sans-serif",
				zIndex: 999999,
			});
			contenedor.append(texto);


			contenedor.click(function() {
				createVideoElement('./video/3.mp4');
			});
			pageElement.append(contenedor);
		}}
	else if(page == 39 && /iPhone/i.test(navigator.userAgent)){
		if(flag_responsivo == false){
			let contenedor = $('<div></div>').css({
				width: '70%',
				height: '50%',
				bottom:40,
				right:60,
				position:'absolute',
				background: 'rgba(0,0,0,0)',
				zIndex: '99999999',
				display: 'flex',
				justifyContent: 'center', // Centra horizontalmente el contenido
				alignItems: 'center', // Centra verticalmente el contenido
				cursor: 'pointer',
				transform: 'translateY(-15%)'
			}).addClass('testeando')
			let texto = $('<p></p>').text('CLICK PARA REPRODUCIR').css({
				color: 'black',
				fontSize: '20px',
				fontWeight: '400',
				userSelect: 'none',
				textAlign: 'center',
				background: 'rgba(255, 255, 255, 1)', // Fondo semitransparente para mejor visibilidad
				padding: '10px 20px',
				borderRadius: '5px',
				'font-family': "'Quicksand', sans-serif",
				zIndex: 999999,
			});
			contenedor.append(texto);


			contenedor.click(function() {
				createVideoElement('./video/4.mp4');
			});
			pageElement.append(contenedor);
		}}
	else if(page == 41 && /iPhone/i.test(navigator.userAgent)){
		if(flag_responsivo == false){
			let contenedor = $('<div></div>').css({
				width: '70%',
				height: '50%',
				bottom:40,
				right:60,
				position:'absolute',
				background: 'rgba(0,0,0,0)',
				zIndex: '99999999',
				display: 'flex',
				justifyContent: 'center', // Centra horizontalmente el contenido
				alignItems: 'center', // Centra verticalmente el contenido
				cursor: 'pointer',
				transform: 'translateY(-15%)'
			}).addClass('testeando')
			let texto = $('<p></p>').text('CLICK PARA REPRODUCIR').css({
				color: 'black',
				fontSize: '20px',
				fontWeight: '400',
				userSelect: 'none',
				textAlign: 'center',
				background: 'rgba(255, 255, 255, 1)', // Fondo semitransparente para mejor visibilidad
				padding: '10px 20px',
				borderRadius: '5px',
				'font-family': "'Quicksand', sans-serif",
				zIndex: 999999,
			});
			contenedor.append(texto);


			contenedor.click(function() {
				createVideoElement('./video/5.mp4');
			});
			pageElement.append(contenedor);
		}}
	else if(page == 43 && /iPhone/i.test(navigator.userAgent)){
		if(flag_responsivo == false){
			let contenedor = $('<div></div>').css({
				width: '70%',
				height: '50%',
				bottom:40,
				right:60,
				position:'absolute',
				background: 'rgba(0,0,0,0)',
				zIndex: '99999999',
				display: 'flex',
				justifyContent: 'center', // Centra horizontalmente el contenido
				alignItems: 'center', // Centra verticalmente el contenido
				cursor: 'pointer',
				transform: 'translateY(-15%)'
			}).addClass('testeando')
			let texto = $('<p></p>').text('CLICK PARA REPRODUCIR').css({
				color: 'black',
				fontSize: '20px',
				fontWeight: '400',
				textAlign: 'center',
				background: 'rgba(255, 255, 255, 1)', // Fondo semitransparente para mejor visibilidad
				padding: '10px 20px',
				borderRadius: '5px',
				'font-family': "'Quicksand', sans-serif",
				zIndex: 999999,
			});
			contenedor.append(texto);


			contenedor.click(function() {
				createVideoElement('./video/6.mp4');
			});
			pageElement.append(contenedor);
		}}

}



// Zoom in / Zoom out

// function zoomTo(event) {

// 		setTimeout(function() {
// 			if ($('.magazine-viewport').data().regionClicked) {
// 				$('.magazine-viewport').data().regionClicked = false;
// 			} else {
// 				if ($('.magazine-viewport').zoom('value')==1) {
// 					$('.magazine-viewport').zoom('zoomIn', event);
// 				} else {
// 					$('.magazine-viewport').zoom('zoomOut');
// 				}
// 			}
// 		}, 1);

// }



// Load regions

function loadRegions(page, element) {
	$.getJSON('pages/'+page+'-regions.json').
	done(function(data) {
		
		$.each(data, function(key, region) {
			addRegion(region, element);
		});
	});
}

// Add region

function addRegion(region, pageElement) {
	
	
	var reg = $('<div />', {'class': 'region  ' + region['class']}),
		options = $('.magazine').turn('options'),
		pageWidth = options.width/2,
		pageHeight = options.height;

	reg.css({
		top: Math.round(region.y/pageHeight*100)+'%',
		left: Math.round(region.x/pageWidth*100)+'%',
		width: Math.round(region.width/pageWidth*100)+'%',
		height: Math.round(region.height/pageHeight*100)+'%',

	}).attr('region-data', $.param(region.data||''));


	reg.appendTo(pageElement);
}

// Process click on a region


function regionClick(event) {

	var region = $(event.target);
	// verifico si tiene la clase region
	if (region.hasClass('region')) {
		// 
		$('.magazine-viewport').data().regionClicked = true;
		

		setTimeout(function() {
			$('.magazine-viewport').data().regionClicked = false;
		}, 100);
		
		var regionType = $.trim(region.attr('class').replace('region', ''));
		
		// ////////////////////////////////////////////
		// var regionData = region.attr('region-data');
		// var regionInfo = regionData ? Object.fromEntries(new URLSearchParams(regionData)) : {};
		// console.log("Datos de la región:", regionInfo);
		// // Si existe un video en la región, creamos el elemento dinámicamente
		// if (regionInfo.video) {
		// 	console.log('funciona')
		// 	createVideoElement(regionInfo.video);
		// }
		// ///////////////////////////////////////////
		return processRegion(region, regionType);
	}

}

function createVideoElement(videoUrl) {
    // Si ya existe un video en el body, lo eliminamos
    $('#video-container').remove();
    // Crear contenedor principal del video
    var videoContainer = $('<div />', {
        id: 'video-container',
    });
    // Crear div interno para organizar los elementos del video
    var elementosVideo = $('<div />', {
        id: 'elementosVideo'
    });
    // Crear el elemento de video
    var videoElement = $('<video />', {
        id: 'miVideo',
        src: videoUrl,
        muted: true,
    });
	// Crear el triángulo de Play
	var playButton = $('<div />', {
		id: 'play-button',
		css: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',

			width: '0',
			height: '0',
			borderLeft: '130px solid white',
			borderTop: '80px solid transparent',
			borderBottom: '80px solid transparent',
			cursor: 'pointer',
			zIndex: '999999999999999999999999999'
		}
	});
    // Crear botón de cierre
    var closeButton = $('<div />', {
        id: 'cerrar-video',
        text: 'X',
        click: function () {
            $('#video-container').remove(); // Elimina el contenedor al hacer clic
        }
    });
    // Crear barra deslizadora
    var progressBar = $('<input />', {
        type: 'range',
        id: 'barra-deslizable',
        min: '0',
        max: '100',
        value: '0',
    });
    // Agregar elementos al contenedor
	elementosVideo.append(videoElement, playButton, closeButton, progressBar);
    videoContainer.append(elementosVideo);

    // Agregar el contenedor directamente al body
    $('body').append(videoContainer);

	agregarFuncionesVideo(videoElement, closeButton, progressBar,playButton);
	
}

function agregarFuncionesVideo(videoElement, closeButton, progressBar,playButton) {
	playButton.on("click", function() {
        if (videoElement[0].paused) {
            videoElement[0].play();
			$("#play-button").css("animation", "play 0.5s ease-in-out forwards");
			setTimeout(() => {
				$("#play-button").remove();
			}, 500);
        } else {
            videoElement[0].pause();
        }
    });
    // Alternar play/pause al hacer clic en el video
    videoElement.on("click", function() {
        if (videoElement[0].paused) {
            videoElement[0].play();
			$("#play-button").css("animation", "play 0.5s ease-in-out forwards");
			setTimeout(() => {
				$("#play-button").remove();
			}, 500);
        } else {
            videoElement[0].pause();
        }
    });

    // Cerrar el contenedor del video al hacer clic en la "X"
    closeButton.on("click", function() {
        $('#video-container').remove(); // Elimina completamente el div de la página
    });

    // Actualiza la barra de progreso mientras el video se reproduce
    videoElement.on("timeupdate", function() {
        const progreso = (videoElement[0].currentTime / videoElement[0].duration) * 100;
        progressBar.val(progreso); // Actualiza la barra
    });

    // Permite que el usuario controle el video con el slider
    progressBar.on("input", function() {
        const nuevoTiempo = (progressBar.val() / 100) * videoElement[0].duration;
        videoElement[0].currentTime = nuevoTiempo;
    });

    // Si el video no está reproduciéndose, al mover el slider se actualiza el video manualmente
    progressBar.on("change", function() {
        if (videoElement[0].paused) {
            videoElement[0].play();
        }
    });
}
// Process the data of every region

function processRegion(region, regionType) {

	data = decodeParams(region.attr('region-data'));

	switch (regionType) {
		case 'link' :

			window.open(data.url);

		break;
		// case 'zoom' :

		// 	var regionOffset = region.offset(),
		// 		viewportOffset = $('.magazine-viewport').offset(),
		// 		pos = {
		// 			x: regionOffset.left-viewportOffset.left,
		// 			y: regionOffset.top-viewportOffset.top
		// 		};

		// 	$('.magazine-viewport').zoom('zoomIn', pos);

		// break;
		case 'to-page' :

			$('.magazine').turn('page', data.page);

		break;
	}

}

// Load large page

function loadLargePage(page, pageElement) {
	
	var img = $('<img />');

	img.on('load', function() {

		var prevImg = pageElement.find('img');
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		prevImg.remove();
		
	});

	// Loadnew page
	
	img.attr('src', 'pages/' +  page + '-large.jpg');
}

// Load small page

function loadSmallPage(page, pageElement) {
	
	var img = pageElement.find('img');

	img.css({width: '100%', height: '100%'});

	img.off('load');
	// Loadnew page

	img.attr('src', 'pages/' +  page + '.jpg');
}
function isChrome() {

	return navigator.userAgent.indexOf('Chrome')!=-1;

}

// Set the width and height for the viewport
function disableControls(page) {
    // Verifica si la página actual es la primera
    if (page == 1) {
        $('.previous-button').hide();

		
		const contenedor = document.querySelector('.magazine-viewport'); // Selecciona el elemento con la clase
		if (contenedor) {
			contenedor.scrollTo({
				left: 0, // Cambia este valor a la posición deseada en el eje x
				behavior: 'smooth' // 'smooth' para desplazamiento suave o 'auto' para instantáneo
			});
		}
		


    } else {
        $('.previous-button').show();
    }
    
    // Verifica si la página actual es la última
    if (page == $('.magazine').turn('pages')) {
        $('.next-button').hide();
    } else {
        $('.next-button').show();
    }
}


function resizeViewport() {

	var width = $(window).width(),
		height = $(window).height(),
		options = $('.magazine').turn('options');

	$('.magazine').removeClass('animated');

	$('.magazine-viewport').css({
		width: width,
		height: height
	}).

	zoom('resize');


	if ($('.magazine').turn('zoom')==1) {
		var bound = calculateBound({
			width: options.width,
			height: options.height,
			boundWidth: Math.min(options.width, width),
			boundHeight: Math.min(options.height, height)
		});

		if (bound.width%2!==0)
			bound.width-=1;

			
		if (bound.width!=$('.magazine').width() || bound.height!=$('.magazine').height()) {

			$('.magazine').turn('size', bound.width, bound.height);

			if ($('.magazine').turn('page')==1)
				$('.magazine').turn('peel', 'br');

			$('.next-button').css({height: bound.height, backgroundPosition: '-38px '+(bound.height/2-32/2)+'px'});
			$('.previous-button').css({height: bound.height, backgroundPosition: '-4px '+(bound.height/2-32/2)+'px'});
		}

				// $('.magazine').css({top: -bound.height/2, left: -bound.width/2});
		// $('.magazine').css({top: -bound.height/4, left: -bound.width/4});
		$('.magazine').css({
			top: -bound.height / 2,
			left: -bound.width / 2,

			// transform: 'rotate(-90deg)'
		});
		// $('.magazine').css({top: -bound.height/2, left: -bound.width/2});
	}

	var magazineOffset = $('.magazine').offset(),
		boundH = height - magazineOffset.top - $('.magazine').height(),
		marginTop = (boundH - $('.thumbnails > div').height()) / 2;

	if (marginTop<0) {
		$('.thumbnails').css({height:1});
	} else {
		$('.thumbnails').css({height: boundH});
		$('.thumbnails > div').css({marginTop: marginTop});
	}

	if (magazineOffset.top<$('.made').height())
		$('.made').hide();
	else
		$('.made').show();

	$('.magazine').addClass('animated');
	
}


// Number of views in a flipbook

function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}

// Current view in a flipbook

function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}

function moveBar(yes) {
	$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
}

function setPreview(view) {

	var previewWidth = 112,
		previewHeight = 73,
		previewSrc = 'pages/preview.jpg',
		preview = $(_thumbPreview.children(':first')),
		numPages = (view==1 || view==$('#slider').slider('option', 'max')) ? 1 : 2,
		width = (numPages==1) ? previewWidth/2 : previewWidth;

	_thumbPreview.
		addClass('no-transition').
		css({width: width + 15,
			height: previewHeight + 15,
			top: -previewHeight - 30,
			left: ($($('#slider').children(':first')).width() - width - 15)/2
		});

	preview.css({
		width: width,
		height: previewHeight
	});

	if (preview.css('background-image')==='' ||
		preview.css('background-image')=='none') {

		preview.css({backgroundImage: 'url(' + previewSrc + ')'});

		setTimeout(function(){
			_thumbPreview.removeClass('no-transition');
		}, 0);

	}

	preview.css({backgroundPosition:
		'0px -'+((view-1)*previewHeight)+'px'
	});
}

// Width of the flipbook when zoomed in

function largeMagazineWidth() {
	
	return 2214;

}

// decode URL Parameters

function decodeParams(data) {

	var parts = data.split('&'), d, obj = {};

	for (var i =0; i<parts.length; i++) {
		d = parts[i].split('=');
		obj[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
	}

	return obj;
}

// Calculate the width and height of a square within another square

function calculateBound(d) {
	
	var bound = {width: d.width, height: d.height};

	if (bound.width>d.boundWidth || bound.height>d.boundHeight) {
		
		var rel = bound.width/bound.height;

		if (d.boundWidth/rel>d.boundHeight && d.boundHeight*rel<=d.boundWidth) {
			
			bound.width = Math.round(d.boundHeight*rel);
			bound.height = d.boundHeight;

		} else {
			
			bound.width = d.boundWidth;
			bound.height = Math.round(d.boundWidth/rel);
		
		}
	}
		
	return bound;
}


// RESPONSIVE CLICK FLECHAS

function disableControls(page) {
	if (page==1)
		$('.previous-button-responsive').hide();
	else
		$('.previous-button-responsive').show();
				
	if (page==$('.magazine').turn('pages'))
		$('.next-button-responsive').hide();
	else
		$('.next-button-responsive').show();
}


$(document).ready(function() {
	// const contenedor = document.querySelector('.magazine-viewport'); 
	
    $('.next-button-responsive').on('click', function() {
        $('.next-button').click();
    });
});
$(document).ready(function() {
	const contenedor = document.querySelector('.magazine-viewport'); 
    $('.previous-button-responsive').on('click', function() {
        $('.previous-button').click();
    });
});


