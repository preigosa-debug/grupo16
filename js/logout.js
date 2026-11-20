let linkLogout = document.querySelector("#logout");

linkLogout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("email");

    document.querySelector(".item-bienvenida").style.display = "none";
    document.querySelector(".item-logout").style.display = "none";
    document.querySelector(".item-login").style.display = "block";
    document.querySelector(".item-registro").style.display = "block";
})