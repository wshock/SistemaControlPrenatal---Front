const tipoUsuarioButtons = document.querySelectorAll('input[name="tipoUsuario"]');
const icono = document.getElementById('iconoUser');

function cambiarIcono() {
    if (tipoUsuarioButtons[0].checked) {
        icono.className = 'fa-solid fa-user'; // Cambiar el icono a uno de paciente
    } else if (tipoUsuarioButtons[1].checked) {
        icono.className = 'fa-solid fa-user-nurse'; // Cambiar el icono a uno de profesional
    }
}

tipoUsuarioButtons.forEach(radio => {
    radio.addEventListener('change', cambiarIcono);
});

