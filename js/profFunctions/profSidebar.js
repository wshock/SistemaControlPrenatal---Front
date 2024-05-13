const menuIcon = document.getElementById("menu-icon");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");

/*Al hacer click, el menú desplegable se hará más pequeño*/
menuIcon.addEventListener("click", () => {
    /*El toogle hace que si tenía esa clase, se la quite
    y si no la tiene, se la ponga */
    barraLateral.classList.toggle("mini-barra-lateral");

    spans.forEach((span)=> {
        span.classList.toggle("oculto");
    });
    
});



barraLateral.addEventListener("mouseenter", ()=>{
    barraLateral.classList.remove("mini-barra-lateral");
    spans.forEach((span)=> {
        span.classList.remove("oculto");
    });
})

barraLateral.addEventListener("mouseleave", () => {
    barraLateral.classList.add("mini-barra-lateral");
    spans.forEach((span)=> {
        span.classList.add("oculto");
    });
})

function cargarPagina(nombre) {
    showPage(nombre);
}



// Función para guardar los datos del formulario en el almacenamiento local
function saveFormData() {
    const form = document.getElementById("formularioRegistro");
    const formData = new FormData(form);
    
    formData.forEach((value, key) => {
        localStorage.setItem(key, value);
    });
}
  
// Función para cargar los datos del almacenamiento local al formulario
function loadFormData() {
    const form = document.getElementById("formularioRegistro");
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input) {
        if (input.type === "radio" || input.type === "checkbox") {
            if (input.value === localStorage.getItem(key)) {
            input.checked = true;
            }
        } else if (input.type === "select-one") {
            input.value = localStorage.getItem(key);
        } else {
            input.value = localStorage.getItem(key);
        }
        }
    });
}

// Cuando carga la página, carga los datos del formulario si existen en el almacenamiento local
window.onload = function() {
    loadFormData();
};

// Cuando envía el formulario, limpiar el almacenamiento local
document.getElementById("formularioRegistro").addEventListener("submit", function() {
    localStorage.clear();
});

// Función para mostrar una página del formulario y ocultar las demás
function showPage(nombre) {
    const pages = document.querySelectorAll(".form-page");
    pages.forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(nombre).style.display = "block";

    // FALTAAAAAAAAAAAAAAAAAA
    //AQUÍ se le tienen que agregar las otras partes que tendrá el formulario
    cambiarColorBotonSiDivVisible(divCarnéPerinatal, botonCarnéPerinatal);
    cambiarColorBotonSiDivVisible(divAntecedentes, botonAntecedentes);
    cambiarColorBotonSiDivVisible(divObstétricos, botonObstétricos);
}

// Para que las funciones netPage y prevPage guarden la data
function nextPage(nombre) {
    saveFormData();
    showPage(nombre);
    }

function prevPage(nombre) {
    saveFormData();
    showPage(nombre);
}


// FALTAAAAAAAAAAAAAAAAAA
// AQUÍ hay que agregar las otras partes que tendrá el formulario
const divCarnéPerinatal = document.getElementById('form-carné-perinatal');
const divAntecedentes = document.getElementById('form-antecedentes');
const divObstétricos = document.getElementById('form-obstétricos');

const botonCarnéPerinatal = document.getElementById('boton-carné-perinatal');
const botonAntecedentes = document.getElementById('boton-antecedentes');
const botonObstétricos = document.getElementById('boton-obstétricos');

// Cambia el color del botón que uno le pase dependiendo si el div está visible o no
function cambiarColorBotonSiDivVisible(div, boton) {
    if (window.getComputedStyle(div).display === 'block') {
        boton.style.backgroundColor= 'var(--color-menu-hover)';
        boton.style.color= 'var(--color-menu-hover-texto)';
    } else {
        boton.style.backgroundColor='';
        boton.style.color= '';
    }
}

