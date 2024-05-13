const divGestasPreviasDesplegado = document.getElementById("gestasPreviasDesplegado");
const checkDesplegarGestasPrevias = document.getElementById("gestasPrevias");

function primerosDivs(){
    if (checkDesplegarGestasPrevias.checked) {
        divGestasPreviasDesplegado.innerHTML = `
        
            <div class="campo-formulario">
                <label for="gestasPreviasNumero">¿Cuántas gestas previas?</label>
                <input type="number" id="gestasPreviasNumero" name="gestasPreviasNumero">
            </div>
            <div class="campo-formulario" id="desplegarAbortos">
                <label for="tuvoAbortos">Abortos</label>
                <input id="tuvoAbortos" type="checkbox" name="tuvoAbortos" value="tuvoAbortosTrue">

                <div id="abortosDesplegado">
                    
                </div>
            </div>


            <div class="campo-formulario" id="desplegarPartos">
                <label for="tuvoPartos">Partos</label>
                <input id="tuvoPartos" type="checkbox" name="tuvoPartos" value="tuvoPartosTrue">

                <div id="partosDesplegado">
                    
                </div>
            </div>

        `;

        
        
        // Aquí
    } else {
        divGestasPreviasDesplegado.innerHTML = ""; 
    }
}

function actualizarDivs() {
    const divAbortosDesplegado = document.getElementById("abortosDesplegado");
    const checkDesplegarAbortos = document.getElementById("tuvoAbortos");
    
    if (checkDesplegarAbortos.checked) {
        divAbortosDesplegado.innerHTML = `
            <div class="campo-formulario">
                <br>
                <label for="abortosNumero">¿Cuántos?</label>
                <input id="abortosNumero" name="abortosNumero" type="number">
            </div>
            <div class="campo-formulario">
                <label for="tresAbortosConsecutivos">¿Más de tres abortos espontáneos consecutivos?</label>
                <input type="checkbox" id="tresAbortosConsecutivos" name="tresAbortosConsecutivos" > 
            </div>`;
    } else {
        divAbortosDesplegado.innerHTML = "";
    }
}

function actualizarNuevosDivs(){
    const divPartosDesplegado = document.getElementById("partosDesplegado");
    const checkDesplegarPartos = document.getElementById("tuvoPartos");
    
    if (checkDesplegarPartos.checked) {
        divPartosDesplegado.innerHTML = `
            <div class="campo-formulario">
                <br>
                <label for="partosNumero">¿Cuántos?</label>
                <input id="partosNumero" name="partosNumero" type="number">
            </div>
            <div class="linea"></div>
            <p class="campo-formulario">Para el último parto previo: </p>
            <div class="campo-formulario">
                <label for="pesoMenor2500g">¿Peso menor a 2500g?</label>
                <input type="checkbox" id="pesoMenor2500g" name="pesoMenor2500g" value="pesoMenor2500gTrue">
            </div>
            
            <div class="campo-formulario">
                <label for="pesoMayor4000g">¿Peso mayor a 4000g?</label>
                <input type="checkbox" id="pesoMayor4000g" name="pesoMayor4000g" value="pesoMayor4000gTrue">
            </div>

            <div class="campo-formulario">
                <label for="partoMultiple">¿Parto múltiple?</label>
                <input type="checkbox" id="partoMultiple" name="partoMultiple" value="partoMultipleTrue">
            </div>
            <div class="linea"></div>

            
            <div class="campo-formulario">
                <label for="numeroPartosVaginales">¿Cuántos partos fueron vaginales?</label>
                <input id="numeroPartosVaginales" name="numeroPartosVaginales" type="number">
            </div>
            <div class="campo-formulario">
                <label for="numeroPartosCesarea">¿Cuántos partos fueron por cesárea?</label>
                <input id="numeroPartosCesarea" name="numeroPartosCesarea" type="number">
            </div>
            <div class="campo-formulario">
                <label for="numeroNacidosVivos">¿Cuántos nacidos vivos?</label>
                <input id="numeroNacidosVivos" name="numeroNacidosVivos" type="number">
            </div>
            <div class="campo-formulario">
                <label for="numeroViven">¿Cuántos viven hoy?</label>
                <input id="numeroViven" name="numeroViven" type="number">
            </div>
            <div class="campo-formulario">
                <label for="muertos1semana">¿Cuántos murieron en la primera semana?</label>
                <input id="muertos1semana" name="muertos1semana" type="number">
            </div>
            <div class="campo-formulario">
                <label for="muertosdespues1semana">¿Cuántos murieron después de la primera semana?</label>
                <input id="muertosdespues1semana" name="muertosdespues1semana" type="number">
            </div>
            <div class="campo-formulario">
                <label for="numeroNacidosMuertos">¿Cuántos nacidos muertos?</label>
                <input id="numeroNacidosMuertos" name="numeroNacidosMuertos" type="number">
            </div>
        `;
    } else {
        divPartosDesplegado.innerHTML = ""; 
    }
}

document.addEventListener('change', function(event) {
    const target = event.target;

    if (target.matches('#tuvoAbortos')) {
        actualizarDivs();
    } else if (target.matches('#tuvoPartos')) {
        actualizarNuevosDivs();
    } else if (target.matches('#gestasPrevias')) {
        primerosDivs();
    }
});