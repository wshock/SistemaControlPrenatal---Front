async function obtenerListaPacientes(){
    try {
        const respuesta = await fetch("http://localhost:4000/madres/list/MadresList",{
            method: 'GET'
        })
        if (!respuesta.ok){
            throw new Error("Error obteniendo lista pacientes")
        } 
        return await respuesta.json();

    } catch (error) {

    }
}

async function listarPacientes(){

    const contenedor = document.getElementById("contenedor-pacientes")
    contenedor.innerHTML = '';
    const pacientes = await obtenerListaPacientes();

    if (pacientes.length === 0){
        contenedor.innerHTML = `
            <div class="contenedorNoPaciente">
                <h1>¡No tienes ninguna paciente!</h1>
                <a href="/madres/add" class="botonAgregarPaciente">Agregar Paciente</a>
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
                <a href="/madres/list/delete/${paciente.id}" class="eliminar">Eliminar</a>
                <a href="/madres/list/edit/${paciente.id}/" class="editar">Editar</a>
            </div>
            <!-- Esto es lo q esta sujeto a cambios, se puede añadir o quitar cosas jsjsj -->

            
        `;
        contenedor.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', listarPacientes);

document.getElementById('mostrarPacientes').addEventListener('click', listarPacientes);


document.getElementById('ocultarPacientes').addEventListener('click', () => {
    document.getElementById('contenedor-pacientes').innerHTML = ''; 
});