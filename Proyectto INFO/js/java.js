// script.js

function cambiarPestana(nombre) {
    const botones = document.querySelectorAll('.tab');

    botones.forEach(boton => {
        boton.classList.remove('activo');
    });

    if (nombre === 'carga') {
        botones[0].classList.add('activo');
    } else if (nombre === 'rescate') {
        botones[1].classList.add('activo');
    } else if (nombre === 'turista') {
        botones[2].classList.add('activo');
    }

}