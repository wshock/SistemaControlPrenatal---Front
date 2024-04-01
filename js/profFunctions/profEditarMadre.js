const urlActual = window.location.href;

document.getElementById("form_carnePerinatal").addEventListener("submit", async (e) => {
    
    const nombre = document.getElementById("nombreEdit").value
    const apellido = document.getElementById("apellidoEdit").value
    const domicilio = document.getElementById("domicilioEdit").value
    const localidad = document.getElementById("localidadEdit").value
    const correo = document.getElementById("correoEdit").value
    const fecha_nacimiento = document.getElementById("fecha_nacimientoEdit").value
    const edad = document.getElementById("edadEdit").value
    const etnia = document.getElementById("etniaEdit").value
    const radiosAlfabeta = document.querySelectorAll("input[name='alfabeta']")
    let alfabeta;
    for (let i = 0; i<radiosAlfabeta.length; i++){
        if (radiosAlfabeta[i].checked){
            alfabeta = radiosAlfabeta[i].value;
            break
        }
    }
    const estudios = document.getElementById("estudiosEdit").value
    const anosMayorNivel = document.getElementById("anosMayorNivelEdit").value
    const estadoCivil = document.getElementById("estadoCivilEdit").value
    const radiosViveSola = document.querySelectorAll("input[name='viveSola']")
    let viveSola;
    for (let i = 0; i<radiosViveSola.length; i++){
        if (radiosViveSola[i].checked){
            viveSola = radiosViveSola[i].value;
            break
        }
    }
    const lugarControlPrenatal = document.getElementById("lugarControlPrenatalEdit").value
    const numeroIdentidad = document.getElementById("numeroIdentidadEdit").value

    try {
        const respuesta = await fetch(urlActual, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre, apellido, domicilio, localidad, correo, 
                        fecha_nacimiento, edad, etnia, alfabeta, estudios, anosMayorNivel,
                         estadoCivil, viveSola, lugarControlPrenatal, numeroIdentidad})
        })
        if (respuesta.ok){
            window.location.href = "/madres/list"
        }
    } catch (error) {
        console.log(error)
    }
});