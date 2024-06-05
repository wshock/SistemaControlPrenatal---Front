async function obtenerConsultas(){
    const urlActual = window.location.href;
    const urlFetch = urlActual+'/listarConsultas';

    try {
        const respuesta = await fetch(urlFetch,{
            method: 'GET'
        })
        if (!respuesta.ok){
            throw new Error("Error obteniendo consultas")
        } 
        return await respuesta.json();

    } catch (error) {

    }
}

document.addEventListener("DOMContentLoaded", async (e) => {
    const contenedor = document.getElementById("seccion-consultas");
    contenedor.innerHTML = '';

    const coincidencias = await obtenerConsultas();

    if (coincidencias.length == 0){
        contenedor.innerHTML = `
            <div class="contenedorNoConsulta">
                <h1>¡Ninguna consulta encontrada!</h1>
            </div>
            `;
    return;
    }

    coincidencias.forEach(coincidencia => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <p> Fecha de la consulta:&nbsp;&nbsp;&nbsp; ${coincidencia.fecha_registro.slice(0,10)} </p>
            <a href="/gestantes/edit/${coincidencia.idPaciente}/${coincidencia.idConsultas}">Entrar</a>
        `;
        contenedor.appendChild(tarjeta);
    })
    


})