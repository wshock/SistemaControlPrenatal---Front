document.getElementById("form_carnePerinatal").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const domicilio = document.getElementById("domicilio").value
    const localidad = document.getElementById("localidad").value
    const correo = document.getElementById("correo").value
    const fecha_nacimiento = document.getElementById("fecha_nacimiento").value
    const edad = document.getElementById("edad").value
    const etnia = document.getElementById("etnia").value
    const radiosAlfabeta = document.querySelectorAll("input[name='alfabeta']")
    let alfabeta;
    for (let i = 0; i<radiosAlfabeta.length; i++){
        if (radiosAlfabeta[i].checked){
            alfabeta = radiosAlfabeta[i].value;
            break
        }
    }
    const estudios = document.getElementById("estudios").value
    const anosMayorNivel = document.getElementById("anosMayorNivel").value
    const estadoCivil = document.getElementById("estadoCivil").value
    const radiosViveSola = document.querySelectorAll("input[name='viveSola']")
    let viveSola;
    for (let i = 0; i<radiosViveSola.length; i++){
        if (radiosViveSola[i].checked){
            viveSola = radiosViveSola[i].value;
            break
        }
    }
    const lugarControlPrenatal = document.getElementById("lugarControlPrenatal").value
    const numeroIdentidad = document.getElementById("numeroIdentidad").value

    try {
        const respuesta = await fetch("http://localhost:4000/madres/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre, apellido, domicilio, localidad, correo, 
                        fecha_nacimiento, edad, etnia, alfabeta, estudios, anosMayorNivel,
                         estadoCivil, viveSola, lugarControlPrenatal, numeroIdentidad})
        })
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {

    }
})