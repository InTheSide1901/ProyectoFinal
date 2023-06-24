let btnAbrirMenu = document.querySelector("#abrir_menu");
let btnCerrarMenu = document.querySelector("#cerrar_menu");
let menu = document.querySelector("#menu_mobile");



btnAbrirMenu.addEventListener("click", () => {
    menu.classList.remove("disabled");
})

btnCerrarMenu.addEventListener("click", () => {
    menu.classList.add("disabled");

})
