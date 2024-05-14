import { primerosDivs, actualizarDivs, actualizarNuevosDivs } from './profRegObstetricosEdit.js';
import { cargarDiv } from './profRegGinecologicosEdit.js';

async function obtenerInfoPaciente(){
    const urlActual = window.location.href;
    const urlFetch = urlActual+'/reqInfo'

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

    // Alistando datos para su edición:

    // Alistando datos del formulario Carné perinatal:

    document.getElementById("nombreEdit").value = infoPaciente.nombres
    document.getElementById("apellidoEdit").value = infoPaciente.apellidos
    document.getElementById("tipoDocumentoEdit").value = infoPaciente.tipoDocumento
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
    document.getElementById("numeroIdentidadEdit").value = infoPaciente.numero_identidad;
    document.getElementById("regimenEdit").value = infoPaciente.regimen;
    document.getElementById("epsEdit").value = infoPaciente.eps;

 
    // Alistando datos del formulario Antecedentes: ?
    
    ( infoPaciente.tbcFamiliar === "Si" ) ? document.getElementById("tbcFamiliarEdit").checked = true : document.getElementById("tbcFamiliarEdit").checked = false;
    ( infoPaciente.tbcPersonal === "Si" ) ? document.getElementById("tbcPersonalEdit").checked = true : document.getElementById("tbcPersonalEdit").checked = false;
    ( infoPaciente.diabetesFamiliar === "Si" ) ? document.getElementById("diabetesFamiliarEdit").checked = true : document.getElementById("diabetesFamiliarEdit").checked = false;
    document.getElementById("diabetesPersonalEdit").value = infoPaciente.diabetesPersonal;
    ( infoPaciente.hipertensionFamiliar === "Si" ) ? document.getElementById("hipertensionFamiliarEdit").checked = true : document.getElementById("hipertensionFamiliarEdit").checked = false;
    ( infoPaciente.hipertensionPersonal === "Si" ) ? document.getElementById("hipertensionPersonalEdit").checked = true : document.getElementById("hipertensionPersonalEdit").checked = false;
    ( infoPaciente.pre_eclampsiaFamiliar === "Si" ) ? document.getElementById("pre_eclampsiaFamiliarEdit").checked = true : document.getElementById("pre_eclampsiaFamiliarEdit").checked = false;
    ( infoPaciente.pre_eclampsiaPersonal === "Si" ) ? document.getElementById("pre_eclampsiaPersonalEdit").checked = true : document.getElementById("pre_eclampsiaPersonalEdit").checked = false;
    document.getElementById("otrosAntecedentesFamiliaresEdit").value = infoPaciente.otrosAntecedentesFamiliares
    document.getElementById("otrosAntecedentesPersonalesEdit").value = infoPaciente.otrosAntecedentesPersonales;
    ( infoPaciente.cirugiaPelvica === "Si" ) ? document.getElementById("cirugiaPelvicaEdit").checked = true : document.getElementById("cirugiaPelvicaEdit").checked = false;
    ( infoPaciente.infertibilidad === "Si" ) ? document.getElementById("infertibilidadEdit").checked = true : document.getElementById("infertibilidadEdit").checked = false;
    ( infoPaciente.vih === "Si" ) ? document.getElementById("vih+Edit").checked = true : document.getElementById("vih+Edit").checked = false;
    ( infoPaciente.cardio_nefropatia === "Si" ) ? document.getElementById("cardio_nefropatiaEdit").checked = true : document.getElementById("cardio_nefropatiaEdit").checked = false;
    ( infoPaciente.ectopicos === "Si" ) ? document.getElementById("ectopicosEdit").checked = true : document.getElementById("ectopicosEdit").checked = false;
    document.getElementById("condicion_graveEdit").value = infoPaciente.condicion_grave;


    // Alistando datos del formulario Obstétricos:

    if ( infoPaciente.gestasPrevias === "Si" ){

        document.getElementById("gestasPreviasEdit").checked = true;
        primerosDivs();
        document.getElementById("gestasPreviasNumeroEdit").value = infoPaciente.gestasPreviasNumero;
        
        if ( infoPaciente.tuvoAbortos === "Si" ){
            document.getElementById("tuvoAbortosEdit").checked = true;
            actualizarDivs();
            document.getElementById("abortosNumeroEdit").value = infoPaciente.abortosNumero;

            if ( infoPaciente.tresAbortosConsecutivos === "Si" ) {
                document.getElementById("tresAbortosConsecutivosEdit").checked = true;
            } else {
                document.getElementById("tresAbortosConsecutivosEdit").checked = false;
            }

        } else {
            document.getElementById("tuvoAbortosEdit").checked = false;
        }


        if ( infoPaciente.tuvoPartos === "Si" ){
            document.getElementById("tuvoPartosEdit").checked = true;
            actualizarNuevosDivs();
            document.getElementById("partosNumeroEdit").value = infoPaciente.partosNumero;
            ( infoPaciente.pesoMenor2500g === "Si" ) ? document.getElementById("pesoMenor2500gEdit").checked = true : document.getElementById("pesoMenor2500gEdit").checked = false;
            ( infoPaciente.pesoMayor4000g === "Si" ) ? document.getElementById("pesoMayor4000gEdit").checked = true : document.getElementById("pesoMayor4000gEdit").checked = false;
            ( infoPaciente.partoMultiple === "Si" ) ? document.getElementById("partoMultipleEdit").checked = true : document.getElementById("partoMultipleEdit").checked = false;
            document.getElementById("numeroPartosVaginalesEdit").value = infoPaciente.numeroPartosVaginales;
            document.getElementById("numeroPartosCesareaEdit").value = infoPaciente.numeroPartosCesarea;
            document.getElementById("numeroNacidosVivosEdit").value = infoPaciente.numeroNacidosVivos;
            document.getElementById("numeroVivenEdit").value = infoPaciente.numeroViven;
            document.getElementById("muertos1semanaEdit").value = infoPaciente.muertos1semana;
            document.getElementById("muertosdespues1semanaEdit").value = infoPaciente.muertosdespues1semana;
            document.getElementById("numeroNacidosMuertosEdit").value = infoPaciente.numeroNacidosMuertos;

        } else {
            document.getElementById("tuvoPartosEdit").checked = false;
        }



    } else {
        document.getElementById("gestasPreviasEdit").checked = false;
    }

    // Alistando datos del formulario Ginecológicos:

    ( infoPaciente.planeadoODeseado === "Si" ) ? document.getElementById("planeadoODeseadoEdit").checked = true : document.getElementById("planeadoODeseadoEdit").checked = false;
    if ( infoPaciente.usabaAnticonceptivo === "Si" ) {
        document.getElementById("usabaAnticonceptivoEdit").checked = true;
        cargarDiv();

        ( infoPaciente.barrera === "Si" ) ? document.getElementById("barreraEdit").checked = true : document.getElementById("barreraEdit").checked = false;
        ( infoPaciente.DIU === "Si" ) ? document.getElementById("DIUEdit").checked = true : document.getElementById("DIUEdit").checked = false;
        ( infoPaciente.hormonal === "Si" ) ? document.getElementById("hormonalEdit").checked = true : document.getElementById("hormonalEdit").checked = false;
        ( infoPaciente.emergencia === "Si" ) ? document.getElementById("emergenciaEdit").checked = true : document.getElementById("emergenciaEdit").checked = false;
        ( infoPaciente.ligadura === "Si" ) ? document.getElementById("ligaduraEdit").checked = true : document.getElementById("ligaduraEdit").checked = false;
        ( infoPaciente.otro === "Si" ) ? document.getElementById("otroEdit").checked = true : document.getElementById("otroEdit").checked = false;


    } else {
        document.getElementById("usabaAnticonceptivoEdit").checked = false;
    }

}


document.addEventListener("DOMContentLoaded", alistarInputsParaEdit)