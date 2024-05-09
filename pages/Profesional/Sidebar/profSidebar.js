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

function cargarPagina(url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById("contenido").innerHTML = data;
    })

    .catch(error => console.error("EL contenido no se cargó", error));
}