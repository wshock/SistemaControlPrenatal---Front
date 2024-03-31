document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = e.target.children[1].children.user.value
    const password = e.target.children[1].children.password.value
    console.log(user, password)
})