function cambiarPestana(pestana) {
    const botones = document.querySelectorAll('.tab');
    botones.forEach(boton => {
        boton.classList.remove('activo');
    });

    botones.forEach(boton => {
        if (boton.getAttribute('onclick').includes(pestana)) {
            boton.classList.add('activo');
        }
    });

    const tarjetas = document.querySelectorAll('.tarjeta');

    if (pestana === 'todos') {
        
        tarjetas.forEach(tarjeta => {
            tarjeta.style.display = 'block';
        });
    } else {
        
        tarjetas.forEach(tarjeta => {
            tarjeta.style.display = 'none';
        });

        const tarjetasMostrar = document.querySelectorAll('.tarjeta.' + pestana);
        tarjetasMostrar.forEach(tarjeta => {
            tarjeta.style.display = 'block';
        });
    }
}


window.onload = function() {
    cambiarPestana('todos');
}



