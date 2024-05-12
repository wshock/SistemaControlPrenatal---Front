async function obtenerInfoPaciente(){
    const urlActual = window.location.href;
    const urlFetch = urlActual+'reqInfo'

    try {
        const respuesta = await fetch(urlFetch,{
            method: 'GET'
        })
        if (!respuesta.ok){
            throw new Error("Error obteniendo lista pacientes")
        } 
        return await respuesta.json();

    } catch (error) {

    }
}

async function alistarInputsParaEdit(){
    const infoPaciente = await obtenerInfoPaciente();

    if (!infoPaciente) {
        alert("No se pudo obtener la información del paciente.");
        return;
    }

    // Validar que todos los campos de infoPaciente estén llenos
    if (!infoPaciente.nombres || !infoPaciente.apellidos || !infoPaciente.domicilio ||
        !infoPaciente.localidad || !infoPaciente.correo || !infoPaciente.fecha_nacimiento ||
        !infoPaciente.edad || !infoPaciente.etnia || !infoPaciente.alfabeta ||
        !infoPaciente.estudios || !infoPaciente.anos_mayor_nivel || !infoPaciente.estado_civil ||
        !infoPaciente.vive_sola || !infoPaciente.lugarControlPrenatal || !infoPaciente.numero_identidad) {
            alert("La información del paciente está incompleta.");
            return;
    }

    document.getElementById("nombreEdit").value = infoPaciente.nombres
    document.getElementById("apellidoEdit").value = infoPaciente.apellidos
    document.getElementById("domicilioEdit").value = infoPaciente.domicilio
    document.getElementById("localidadEdit").value = infoPaciente.localidad
    document.getElementById("correoEdit").value = infoPaciente.correo
    let fechaFormateada = infoPaciente.fecha_nacimiento.slice(0, 10);
    document.getElementById("fecha_nacimientoEdit").value = fechaFormateada
    document.getElementById("edadEdit").value = infoPaciente.edad
    document.getElementById("etniaEdit").value = infoPaciente.etnia
    document.getElementById(infoPaciente.alfabeta.toLowerCase()+"_Alfabeta").checked = true;
    document.getElementById("estudiosEdit").value = infoPaciente.estudios
    document.getElementById("anosMayorNivelEdit").value = infoPaciente.anos_mayor_nivel
    document.getElementById("estadoCivilEdit").value = infoPaciente.estado_civil
    document.getElementById(infoPaciente.vive_sola.toLowerCase()+"_ViveSola").checked = true;
    document.getElementById("lugarControlPrenatalEdit").value = infoPaciente.lugarControlPrenatal
    document.getElementById("numeroIdentidadEdit").value = infoPaciente.numero_identidad
    
}


document.addEventListener("DOMContentLoaded", alistarInputsParaEdit)