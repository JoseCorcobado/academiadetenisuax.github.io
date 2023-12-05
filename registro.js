document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-registro');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        registrarAlumno();
    });

    function registrarAlumno() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const nivel = document.getElementById('nivel').value;

        alert(`Gracias ${nombre}, te has registrado para la clase con nivel de tenis ${nivel}.
        \nEmail: ${email}\nTeléfono: ${telefono}`);
        formulario.reset();
    }
});
