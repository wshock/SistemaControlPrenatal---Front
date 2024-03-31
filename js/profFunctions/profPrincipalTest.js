// todavía intentado el fetch con el GET para redirigir a la página, esperando jaja


document.getElementById("box-nuevas").addEventListener("click", async (e) => {
    try {
        const respuesta = await fetch("http://localhost:4000/madres/add", {
            method: 'GET'
        })
        

    } catch (error) { 

    }
})