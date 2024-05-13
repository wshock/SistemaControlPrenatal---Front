async function obtenerCoincidenciaPaciente(id){
    const urlActual = window.location.href;
    const urlFetch = urlActual+'/'+id;

    try {
        const respuesta = await fetch(urlFetch,{
            method: 'GET'
        })
        if (!respuesta.ok){
            throw new Error("Error obteniendo pacientes")
        } 
        return await respuesta.json();

    } catch (error) {

    }

}




document.getElementById("btnBuscarMadre").addEventListener("click", async (e) => {

    let idMadre = document.getElementById("busquedaMadre").value
    const contenedor = document.getElementById("container-coincidencias")
    contenedor.innerHTML = '';

    if (idMadre === ""){
        idMadre = "x";
    }

    const coincidencias = await obtenerCoincidenciaPaciente(idMadre);

    if (coincidencias.length === 0){
        contenedor.innerHTML = `
            <div class="contenedorNoPaciente">
                <h1>¡Ninguna coincidencia encontrada!</h1>
            </div>
        `;
        return;
    }

    coincidencias.forEach(coincidencia => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `
            <p> Nombre:&nbsp;&nbsp;<strong> ${coincidencia.nombres} ${coincidencia.apellidos}</strong>,&nbsp; N.Identificación:&nbsp;&nbsp; <strong>${coincidencia.numero_identidad}</strong> </p>
            <a href="/gestantes/edit/${coincidencia.id}">Entrar</a>
        `;
        contenedor.appendChild(tarjeta);

    })

    // ya tengo lo que se ingresa en el front, falta organizar toda la parte del back (eliminar todo el código q era para listar)
    // y ahora solo buscar y listar a la madre/gestaciones que se encuentren :D.
})











async function listarPacientes(){

    const contenedor = document.getElementById("contenedor-pacientes")
    contenedor.innerHTML = '';
    const pacientes = await obtenerListaPacientes();

    if (pacientes.length === 0){
        contenedor.innerHTML = `
            <div class="contenedorNoPaciente">
                <h1>¡No tienes ninguna paciente!</h1>
                <a href="/gestantes/add" class="botonAgregarPaciente">Agregar Paciente</a>
            </div>
        `;
        return;
    }

    pacientes.forEach(paciente => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <h2>${paciente.nombres}</h2>
            <p>Edad: ${paciente.edad}</p>
            <p>Dirección: ${paciente.domicilio}</p>
            <p>Correo electrónico: ${paciente.correo}</p>
            
            <div class="botones">
                <a href="/gestantes/list/delete/${paciente.id}" class="eliminar">Eliminar</a>
                <a href="/gestantes/list/edit/${paciente.id}/" class="editar">Editar</a>
            </div>
            <!-- Esto es lo q esta sujeto a cambios, se puede añadir o quitar cosas jsjsj -->

            
        `;
        contenedor.appendChild(tarjeta);
    });
}


