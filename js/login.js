document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value
    const password = document.getElementById("password").value
    const radios = document.querySelectorAll('input[name="tipoUsuario"]')
    let tipoUser;
    for (let i = 0; i<radios.length; i++){
        if (radios[i].checked){
            tipoUser = radios[i].value;
            break;
        }
    }

    // Validar que se haya ingresado un usuario
    if (!user.trim()) {
        alert("Por favor ingresa tu nombre de usuario");
        return;
    }

    // Validar que se haya ingresado una contraseña
    if (!password.trim()) {
        alert("Por favor ingresa tu contraseña");
        return;
    }

    // Validar que se haya seleccionado un tipo de usuario
    if (!tipoUser) {
        alert("Por favor selecciona el tipo de usuario");
        return;
    }


    try {
        const respuesta = await fetch("http://localhost:4000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, password, tipoUser })
        })
        const data = await respuesta.json();
        console.log(data);

    } catch (error) {

    }
})