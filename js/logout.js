let linkLogout = document.querySelector("#logout");

linkLogout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("email");

    document.querySelector(".item-bienvenida").hidden = true;
    document.querySelector(".item-logout").hidden = true;
    document.querySelector(".item-login").hidden = false;
    document.querySelector(".item-registro").hidden = false;
});