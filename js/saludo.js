let emailGuardado = localStorage.getItem("email");

if (emailGuardado) {
    let itemBienvenida = document.querySelector(".item-bienvenida");
    let itemLogout = document.querySelector(".item-logout");
    let itemLogin = document.querySelector(".item-login");
    let itemRegistro = document.querySelector(".item-registro");
    let textoBienvenida = document.querySelector("#bienvenida");

    textoBienvenida.innerText = "Bienvenido: " + emailGuardado;

    itemBienvenida.hidden = false;
    itemLogout.hidden = false;
    itemLogin.hidden = true;
    itemRegistro.hidden = true;
}