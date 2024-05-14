
document.getElementById("formularioRegistro").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Obteniendo datos del formulario Carne Perinatal:

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


    // Obteniendo datos del formulario Antecedentes:

    const tbcFamiliar = (document.getElementById("tbcFamiliar").checked === true) ? "Si" : "No";
    const tbcPersonal = (document.getElementById("tbcPersonal").checked === true) ? "Si" : "No";
    const diabetesFamiliar = (document.getElementById("diabetesFamiliar").checked === true) ? "Si" : "No";
    const diabetesPersonal = document.getElementById("diabetesPersonal").value 
    const hipertensionFamiliar = (document.getElementById("hipertensionFamiliar").checked === true) ? "Si" : "No";
    const hipertensionPersonal = (document.getElementById("hipertensionPersonal").checked === true) ? "Si" : "No";
    const pre_eclampsiaFamiliar = (document.getElementById("pre_eclampsiaFamiliar").checked === true) ? "Si" : "No";
    const pre_eclampsiaPersonal = (document.getElementById("pre_eclampsiaPersonal").checked === true) ? "Si" : "No";
    const otrosAntecedentesFamiliares = document.getElementById("otrosAntecedentesFamiliares").value
    const otrosAntecedentesPersonales = document.getElementById("otrosAntecedentesPersonales").value
    const cirugiaPelvica = (document.getElementById("cirugiaPelvica").checked === true) ? "Si" : "No";
    const infertibilidad = (document.getElementById("infertibilidad").checked === true) ? "Si" : "No";
    const vih = (document.getElementById("vih+").checked === true) ? "Si" : "No"; // diferente al campo de la bd
    const cardio_nefropatia = (document.getElementById("cardio_nefropatia").checked === true) ? "Si" : "No";
    const ectopicos = (document.getElementById("ectopicos").checked === true) ? "Si" : "No";
    const condicion_grave = document.getElementById("condicion_grave").value


    // Obteniendo datos del formulario Obstétricos:

    // inicializo todos los valores como "N/A" ya que no siempre se seleccionarán todas las opciones y quiero evitar errores con la BD:
    let gestasPrevias = "N/A";
    let gestasPreviasNumero = 0;
    let tuvoAbortos = "N/A";
    let abortosNumero = 0;
    let tresAbortosConsecutivos = "N/A";
    let tuvoPartos = "N/A";
    let partosNumero = 0;
    let pesoMenor2500g = "N/A";
    let pesoMayor4000g = "N/A";
    let partoMultiple = "N/A";
    let numeroPartosVaginales = 0;
    let numeroPartosCesarea = 0;
    let numeroNacidosVivos = 0;
    let numeroViven = 0;
    let muertos1semana = 0;
    let muertosdespues1semana = 0;
    let numeroNacidosMuertos = 0;


    if ( document.getElementById("gestasPrevias").checked === true ) {

        gestasPrevias = "Si";
        gestasPreviasNumero = document.getElementById("gestasPreviasNumero").value

        if ( document.getElementById("tuvoAbortos").checked === true ) {
            tuvoAbortos = "Si";
            abortosNumero = document.getElementById("abortosNumero").value
            tresAbortosConsecutivos = (document.getElementById("tresAbortosConsecutivos").checked === true) ? "Si" : "No";
        }

        if ( document.getElementById("tuvoPartos").checked === true ){
            tuvoPartos = "Si";
            partosNumero = document.getElementById("partosNumero").value
            pesoMenor2500g = (document.getElementById("pesoMenor2500g").checked === true) ? "Si" : "No";
            pesoMayor4000g = (document.getElementById("pesoMayor4000g").checked === true) ? "Si" : "No";
            partoMultiple = (document.getElementById("partoMultiple").checked === true) ? "Si" : "No";
            numeroPartosVaginales = document.getElementById("numeroPartosVaginales").value
            numeroPartosCesarea = document.getElementById("numeroPartosCesarea").value
            numeroNacidosVivos = document.getElementById("numeroNacidosVivos").value
            numeroViven = document.getElementById("numeroViven").value
            muertos1semana = document.getElementById("muertos1semana").value
            muertosdespues1semana = document.getElementById("muertosdespues1semana").value
            numeroNacidosMuertos = document.getElementById("numeroNacidosMuertos").value
        }
    } 


    try {
        const respuesta = await fetch("http://localhost:4000/gestantes/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre, apellido, domicilio, localidad, correo, 
                        fecha_nacimiento, edad, etnia, alfabeta, estudios, anosMayorNivel,
                        estadoCivil, viveSola, lugarControlPrenatal, numeroIdentidad,
                        tbcFamiliar, tbcPersonal, diabetesFamiliar, diabetesPersonal,
                        hipertensionFamiliar, hipertensionPersonal, pre_eclampsiaFamiliar, pre_eclampsiaPersonal,
                        otrosAntecedentesFamiliares, otrosAntecedentesPersonales, cirugiaPelvica, infertibilidad,
                        vih, cardio_nefropatia, ectopicos, condicion_grave, gestasPrevias, gestasPreviasNumero,
                        tuvoAbortos, abortosNumero, tresAbortosConsecutivos, tuvoPartos, partosNumero, pesoMenor2500g,
                        pesoMayor4000g, partoMultiple, numeroPartosVaginales, numeroPartosCesarea, numeroNacidosVivos,
                        numeroViven, muertos1semana, muertosdespues1semana, numeroNacidosMuertos })
        })
        if (respuesta.ok){
            window.location.reload();
        }   
        const data = await respuesta.json();
        
    } catch (error) {
        console.log(error);
    }
})

