let lista_categorias = document.querySelector('.lista-categorias')
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get('categoria')


/* ASIDE */
fetch(`https://dummyjson.com/products/${categoria}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for (let i = 0; i < data.length; i ++){
    lista_categorias.innerHTML += `
    <li><a href="./category.html?categoria=${data[i]}">${data[i]}</a></li>`
  }
 
})
.catch(function(error) {
  console.log("Error: " + error);
})

let formulario = document.querySelector(".form-register");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let inputConfirmar = document.querySelector("#confirm-password");
let mensajeError = document.querySelector("#error-register");

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
    } else if (inputPassword.value !== inputConfirmar.value) {
        e.preventDefault();
        mensajeError.innerText = "Las contraseñas no coinciden";
    } else if (!inputTerminos.checked) {
        e.preventDefault();
        mensajeError.innerText = "Debes aceptar los terminos y condiciones";
    }
  })