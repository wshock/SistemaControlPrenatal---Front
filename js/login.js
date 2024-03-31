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