const horariosDisponibles = [
    { hora: '10:00', disponible: true },
    { hora: '11:00', disponible: true },
    { hora: '12:00', disponible: true },
    { hora: '13:00', disponible: true },
    { hora: '16:00', disponible: true },
    { hora: '17:00', disponible: true },
    { hora: '18:00', disponible: true },
    { hora: '19:00', disponible: true },
    { hora: '20:00', disponible: true },
    { hora: '21:00', disponible: true },
];

const calendario = document.getElementById('calendario');

function mostrarHorariosDisponibles() {
    calendario.innerHTML = '';

    for (const horario of horariosDisponibles) {
        const divHorario = document.createElement('div');
        divHorario.classList.add('horario');

        if (horario.disponible) {
            divHorario.textContent = `Hora: ${horario.hora} - Disponible`;
            divHorario.addEventListener('click', function() {
                reservarPista(horario);
            });
        } else {
            divHorario.textContent = `Hora: ${horario.hora} - Reservado`;
            divHorario.classList.add('no-disponible');
        }

        calendario.appendChild(divHorario);
    }
}

function reservarPista(horario) {
    if (horario.disponible) {
        horario.disponible = false;
        mostrarHorariosDisponibles();
        alert(`Has reservado la pista para las ${horario.hora}`);
    } 
}

mostrarHorariosDisponibles();
