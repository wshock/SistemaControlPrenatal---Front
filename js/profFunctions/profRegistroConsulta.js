document.getElementById("form-consulta-nueva").addEventListener("submit", async (e) => {
    e.preventDefault();


    let fecha_registro = "N/A";
    let edad_gestacional = "N/A";
    let presion_arterial = "N/A";
    let altura_uterina = "N/A";
    let presentacion = "N/A";
    let fcf = "N/A";
    let movimientos_fetales = "N/A";
    let hierro = "N/A";
    let acido_folico = "N/A";
    let calcio = "N/A";
    let comentarios = "N/A";



    if (document.getElementById("fecha_registro").value != null) fecha_registro = document.getElementById("fecha_registro").value
    if (document.getElementById("edad_gestacional").value != null) edad_gestacional = document.getElementById("edad_gestacional").value
    if (document.getElementById("presion_arterial").value != null) presion_arterial = document.getElementById("presion_arterial").value
    if (document.getElementById("altura_uterina").value != null) altura_uterina = document.getElementById("altura_uterina").value
    if (document.getElementById("presentacion").value != null) presentacion = document.getElementById("presentacion").value
    if (document.getElementById("fcf").value != null) fcf = document.getElementById("fcf").value
    if (document.getElementById("movimientos_fetales").value != null) movimientos_fetales = document.getElementById("movimientos_fetales").value
    if (document.getElementById("hierro").value != null) hierro = document.getElementById("hierro").value
    if (document.getElementById("acido_folico").value != null) acido_folico = document.getElementById("acido_folico").value
    if (document.getElementById("calcio").value != null) calcio = document.getElementById("calcio").value
    if (document.getElementById("comentarios").value != null) comentarios = document.getElementById("comentarios").value
    
    const urlActual = window.location.href;
    
    try {
        const respuesta = await fetch(urlActual, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fecha_registro, edad_gestacional, presion_arterial,
                                altura_uterina, presentacion, fcf, movimientos_fetales, hierro,
                                acido_folico, calcio, comentarios
             })
        })
        if (respuesta.ok || respuesta.status == 304){
            const pathArray = window.location.pathname.split('/');
            const dynamicId = pathArray[3]; // Obtener el número dinámico de la URL actual
            window.location.href = `/gestantes/edit/${dynamicId}`;
        }   
        const data = await respuesta.json();
        
    } catch (error) {
        console.log(error);
    }
})


// obteniendo los campos del form Consulta: (todavía no esta claro con q Action llamaré este js :D)
