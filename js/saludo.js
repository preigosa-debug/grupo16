let emailGuardado = localStorage.getItem("email");

if (emailGuardado) {
    let itemBienvenida = document.querySelector(".item-bienvenida");
    let itemLogout = document.querySelector(".item-logout");
    let itemLogin = document.querySelector(".item-login");
    let itemRegistro = document.querySelector(".item-registro");
    let textoBienvenida = document.querySelector("#bienvenida");

    textoBienvenida.innerText = "Bienvenido: " + emailGuardado;

    itemBienvenida.style.display = "block";
    itemLogout.style.display = "block";
    itemLogin.style.display = "none";
    itemRegistro.style.display = "none";
}