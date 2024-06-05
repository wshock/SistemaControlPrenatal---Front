const urlActual = window.location.href;


document.getElementById("formularioRegistro").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Obteniendo datos del formulario Carne Perinatal:

    const nombre = document.getElementById("nombreEdit").value
    const apellido = document.getElementById("apellidoEdit").value
    const tipoDocumento = document.getElementById("tipoDocumentoEdit").value
    const numeroIdentidad = document.getElementById("numeroIdentidadEdit").value
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
    const regimen = document.getElementById("regimenEdit").value
    const eps = document.getElementById("epsEdit").value

    // Juanpa, esto sería mejor si va en profRegistro :D
    // if (!nombre.trim() || !apellido.trim() || !domicilio.trim() || !localidad.trim() ||
    //     !correo.trim() || !fecha_nacimiento.trim() || !edad.trim() || !etnia.trim() ||
    //     !alfabeta || !estudios.trim() || !anosMayorNivel.trim() || !estadoCivil.trim() ||
    //     !viveSola || !lugarControlPrenatal.trim() || !numeroIdentidad.trim()) {
    //         alert("Por favor completa todos los campos");
    //         return;
    // }


    // Obteniendo datos del formulario Antecedentes:

    const tbcFamiliar = (document.getElementById("tbcFamiliarEdit").checked === true) ? "Si" : "No";
    const tbcPersonal = (document.getElementById("tbcPersonalEdit").checked === true) ? "Si" : "No";
    const diabetesFamiliar = (document.getElementById("diabetesFamiliarEdit").checked === true) ? "Si" : "No";
    const diabetesPersonal = document.getElementById("diabetesPersonalEdit").value 
    const hipertensionFamiliar = (document.getElementById("hipertensionFamiliarEdit").checked === true) ? "Si" : "No";
    const hipertensionPersonal = (document.getElementById("hipertensionPersonalEdit").checked === true) ? "Si" : "No";
    const pre_eclampsiaFamiliar = (document.getElementById("pre_eclampsiaFamiliarEdit").checked === true) ? "Si" : "No";
    const pre_eclampsiaPersonal = (document.getElementById("pre_eclampsiaPersonalEdit").checked === true) ? "Si" : "No";
    const otrosAntecedentesFamiliares = document.getElementById("otrosAntecedentesFamiliaresEdit").value
    const otrosAntecedentesPersonales = document.getElementById("otrosAntecedentesPersonalesEdit").value
    const cirugiaPelvica = (document.getElementById("cirugiaPelvicaEdit").checked === true) ? "Si" : "No";
    const infertibilidad = (document.getElementById("infertibilidadEdit").checked === true) ? "Si" : "No";
    const vih = (document.getElementById("vih+Edit").checked === true) ? "Si" : "No"; // diferente al campo de la bd
    const cardio_nefropatia = (document.getElementById("cardio_nefropatiaEdit").checked === true) ? "Si" : "No";
    const ectopicos = (document.getElementById("ectopicosEdit").checked === true) ? "Si" : "No";
    const condicion_grave = document.getElementById("condicion_graveEdit").value


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


    if ( document.getElementById("gestasPreviasEdit").checked === true ) {

        gestasPrevias = "Si";
        gestasPreviasNumero = document.getElementById("gestasPreviasNumeroEdit").value

        if ( document.getElementById("tuvoAbortosEdit").checked === true ) {
            tuvoAbortos = "Si";
            abortosNumero = document.getElementById("abortosNumeroEdit").value
            tresAbortosConsecutivos = (document.getElementById("tresAbortosConsecutivosEdit").checked === true) ? "Si" : "No";
        }

        if ( document.getElementById("tuvoPartosEdit").checked === true ){
            tuvoPartos = "Si";
            partosNumero = document.getElementById("partosNumeroEdit").value
            pesoMenor2500g = (document.getElementById("pesoMenor2500gEdit").checked === true) ? "Si" : "No";
            pesoMayor4000g = (document.getElementById("pesoMayor4000gEdit").checked === true) ? "Si" : "No";
            partoMultiple = (document.getElementById("partoMultipleEdit").checked === true) ? "Si" : "No";
            numeroPartosVaginales = document.getElementById("numeroPartosVaginalesEdit").value
            numeroPartosCesarea = document.getElementById("numeroPartosCesareaEdit").value
            numeroNacidosVivos = document.getElementById("numeroNacidosVivosEdit").value
            numeroViven = document.getElementById("numeroVivenEdit").value
            muertos1semana = document.getElementById("muertos1semanaEdit").value
            muertosdespues1semana = document.getElementById("muertosdespues1semanaEdit").value
            numeroNacidosMuertos = document.getElementById("numeroNacidosMuertosEdit").value
        }
    } 




    // Obteniendo datos del formulario Ginecológicos:

    let planeadoODeseado = "N/A";
    let usabaAnticonceptivo = "N/A";
    let barrera = "N/A";
    let DIU = "N/A";
    let hormonal = "N/A";
    let emergencia = "N/A";
    let ligadura = "N/A";
    let otro = "N/A";

    if ( document.getElementById("planeadoODeseadoEdit").checked === true ) planeadoODeseado = "Si";

    if ( document.getElementById("usabaAnticonceptivoEdit").checked === true ) {
        usabaAnticonceptivo = "Si";
        if ( document.getElementById("barreraEdit").checked === true ) barrera = "Si";
        if ( document.getElementById("DIUEdit").checked === true ) DIU = "Si";
        if ( document.getElementById("hormonalEdit").checked === true ) hormonal = "Si";
        if ( document.getElementById("emergenciaEdit").checked === true ) emergencia = "Si";
        if ( document.getElementById("ligaduraEdit").checked === true ) ligadura = "Si";
        if ( document.getElementById("otroEdit").checked === true ) otro = "Si";
    }


    try {
        const respuesta = await fetch(urlActual, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre, apellido, tipoDocumento, domicilio, localidad, correo, 
                fecha_nacimiento, edad, etnia, alfabeta, estudios, anosMayorNivel,
                estadoCivil, viveSola, lugarControlPrenatal, numeroIdentidad, regimen, eps,
                tbcFamiliar, tbcPersonal, diabetesFamiliar, diabetesPersonal,
                hipertensionFamiliar, hipertensionPersonal, pre_eclampsiaFamiliar, pre_eclampsiaPersonal,
                otrosAntecedentesFamiliares, otrosAntecedentesPersonales, cirugiaPelvica, infertibilidad,
                vih, cardio_nefropatia, ectopicos, condicion_grave, gestasPrevias, gestasPreviasNumero,
                tuvoAbortos, abortosNumero, tresAbortosConsecutivos, tuvoPartos, partosNumero, pesoMenor2500g,
                pesoMayor4000g, partoMultiple, numeroPartosVaginales, numeroPartosCesarea, numeroNacidosVivos,
                numeroViven, muertos1semana, muertosdespues1semana, numeroNacidosMuertos, planeadoODeseado, usabaAnticonceptivo,
                barrera, DIU, hormonal, emergencia, ligadura, otro })
        })
        if (respuesta.ok){
            window.location.reload();
        }   
        const data = await respuesta.json();
        
    } catch (error) {
        console.log(error);
    }
})