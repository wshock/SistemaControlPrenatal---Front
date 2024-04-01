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

    document.getElementById("nombreEdit").value = infoPaciente.nombres
    document.getElementById("apellidoEdit").value = infoPaciente.apellidos
    document.getElementById("domicilioEdit").value=infoPaciente.domicilio
    document.getElementById("localidadEdit").value=infoPaciente.localidad
    document.getElementById("correoEdit").value=infoPaciente.correo
    document.getElementById("fecha_nacimientoEdit").value=infoPaciente.fecha_nacimiento
    document.getElementById("edadEdit").value=infoPaciente.edad
    document.getElementById("etniaEdit").value=infoPaciente.etnia

    //continuar agregando los datos para q la profesional solo edite lo que quiera :D
}


document.addEventListener("DOMContentLoaded", alistarInputsParaEdit)