document.addEventListener('DOMContentLoaded', function() {
    const imagenes = [
        'img/img7.png',
        'img/img8.png',
        'img/img9.png',
        'img/img10.png',
        'img/img11.png',
    ];

    let imagenActual = 0;
    const imagenGaleria = document.getElementById('imagen-galeria');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');

    function mostrarImagen() {
        imagenGaleria.src = imagenes[imagenActual];
    }

    function irAImagenSiguiente() {
        imagenActual++;
        if (imagenActual >= imagenes.length) {
            imagenActual = 0;
        }
        mostrarImagen();
    }

    function irAImagenAnterior() {
        imagenActual--;
        if (imagenActual < 0) {
            imagenActual = imagenes.length - 1;
        }
        mostrarImagen();
    }

    btnSiguiente.addEventListener('click', irAImagenSiguiente);
    btnAnterior.addEventListener('click', irAImagenAnterior);

    mostrarImagen(); 
});
