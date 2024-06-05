async function obtenerDatosConsulta(){
    const pathArray = window.location.pathname.split('/');
    const idConsulta = pathArray[4];
    const idPaciente = pathArray[3]; // Obtener el número dinámico de la URL actual

    try {

        const respuesta = await fetch("http://localhost:4000/gestantes/edit/"+idPaciente+"/"+idConsulta+"/getConsulta", {
            method: 'GET'
        })
        if (!respuesta.ok && !respuesta.status == 304){
            throw new Error("Error obteniendo lista pacientes")
        } 
        return await respuesta.json();

    } catch (error) {
        
    }
}

async function obtenerNombreGestante(){
    const pathArray = window.location.pathname.split('/');
    const idConsulta = pathArray[4];
    const idPaciente = pathArray[3]; // Obtener el número dinámico de la URL actual
    
    try {

        const respuesta = await fetch("http://localhost:4000/gestantes/edit/"+idPaciente+"/"+idConsulta+"/getNombre", {
            method: 'GET'
        })
        if (!respuesta.ok && !respuesta.status == 304){
            throw new Error("Error obteniendo nombre paciente")
        } 
        return await respuesta.json();

    } catch (error) {
        
    }
}

async function alistarInputs(){
    const infoPaciente = await obtenerDatosConsulta();
    const nombrePaciente = await obtenerNombreGestante();

    console.log(infoPaciente);

    document.getElementById("nombre_gestante_consulta").value = nombrePaciente.nombres;
    let fecha_registro = infoPaciente.fecha_registro.slice(0,10);
    document.getElementById("fecha_registro_consulta").value = fecha_registro;
    document.getElementById("edad_gestacional_consulta").value = infoPaciente.edad_gestacional;
    document.getElementById("presion_arterial_consulta").value = infoPaciente.presion_arterial;
    document.getElementById("altura_uterina_consulta").value = infoPaciente.altura_uterina;
    document.getElementById("presentacion_consulta").value = infoPaciente.presentacion
    document.getElementById("fcf_consulta").value = infoPaciente.fcf;
    document.getElementById("movimientos_fetales_consulta").value = infoPaciente.movimientos_fetales;
    document.getElementById("hierro_consulta").value = infoPaciente.hierro;
    document.getElementById("acido_folico_consulta").value = infoPaciente.acido_folico;
    document.getElementById("calcio_consulta").value = infoPaciente.calcio;
    document.getElementById("comentarios_consulta").value = infoPaciente.comentarios;


}

document.addEventListener("DOMContentLoaded", alistarInputs);