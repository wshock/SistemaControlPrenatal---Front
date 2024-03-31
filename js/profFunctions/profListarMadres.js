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

    pacientes.forEach(paciente => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <h2>${paciente.nombres}</h2>
            <p>Edad: ${paciente.edad}</p>
            <p>Dirección: ${paciente.domicilio}</p>
            <p>Correo electrónico: ${paciente.correo}</p>
            
            <div class="botones">
                <button class="eliminar">Eliminar</button>
                <button class="editar">Editar</button>
            </div>
            <!-- Esto es lo q esta sujeto a cambios, se puede añadir o quitar cosas jsjsj -->

            
        `;
        contenedor.appendChild(tarjeta);
    });
}

document.getElementById('mostrarPacientes').addEventListener('click', listarPacientes);


document.getElementById('ocultarPacientes').addEventListener('click', () => {
    document.getElementById('contenedor-pacientes').innerHTML = ''; 
});