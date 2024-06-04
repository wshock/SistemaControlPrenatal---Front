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



})