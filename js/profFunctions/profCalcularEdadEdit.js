document.getElementById('fecha_nacimientoEdit').addEventListener('input', function() {
    const fecha_nacimiento = new Date(this.value);
    const edadInput = document.getElementById('edadEdit');

    if (fecha_nacimiento) {
        const today = new Date();
        let edad = today.getFullYear() - fecha_nacimiento.getFullYear();
        const monthDifference = today.getMonth() - fecha_nacimiento.getMonth();

        // Ajusta la edad si el mes y el día de la fecha actual son anteriores al mes y el día de nacimiento
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < fecha_nacimiento.getDate())) {
            edad--;
        }

        edadInput.value = edad;
    } else {
        edadInput.value = '';
    }
});
