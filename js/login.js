let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get('categoria')
let formulario = document.querySelector(".formulario");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let mensajeError = document.querySelector("#error-login");

formulario.addEventListener("submit", function (e) {
    mensajeError.innerText = "";

    if (inputEmail.value === "") {
        e.preventDefault();
        mensajeError.innerText = "El campo email es obligatorio";
    } else if (inputPassword.value === "") {
        e.preventDefault();
        mensajeError.innerText = "El campo contraseña es obligatorio";
    } else if (inputPassword.value.length < 6) {
        e.preventDefault();
        mensajeError.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else {
        localStorage.setItem("email", inputEmail.value);
    }
});