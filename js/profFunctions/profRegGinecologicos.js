const checkUsabaMetodoAnticonceptivo = document.getElementById("usabaAnticonceptivo");

function cargarDiv(){
    const divDesplegarFalloMetodoAnticonceptivo = document.getElementById("desplegarFalloMetodoAnticonceptivo");

    if (checkUsabaMetodoAnticonceptivo.checked) {
        divDesplegarFalloMetodoAnticonceptivo.style.display = "block"; // Mostrar el div si el checkbox está seleccionado
    } else {
        divDesplegarFalloMetodoAnticonceptivo.style.display = "none"; // Ocultar el div si el checkbox no está seleccionado
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarDiv();

    document.addEventListener('change', function(event) {
        const target = event.target;

        if (target.matches('#usabaAnticonceptivo')) {
            cargarDiv();
        } 
    });
});
