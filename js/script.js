function redirect(url) {
    window.location.href = url;
  }

// Obtener todos los campos de entrada
const inputs = document.querySelectorAll('input[type="text"]');

// Iterar sobre cada campo de entrada
inputs.forEach(input => {
    // Agregar event listener para el evento input (cuando se escribe en el campo)
    input.addEventListener('input', () => {
        // Si el campo está vacío, cambiar el fondo a gris claro
        if (!input.value.trim()) {
            input.style.backgroundColor = 'lightgray';
        } else {
            // Si el campo tiene texto, cambiar el fondo a azul claro
            input.style.backgroundColor = 'lightblue';
        }
    });

    // Agregar event listener para el evento blur (cuando el campo pierde el foco)
    input.addEventListener('blur', () => {
        // Si el campo está vacío, cambiar el fondo a gris claro
        if (!input.value.trim()) {
            input.style.backgroundColor = 'lightgray';
        }
    });
});

