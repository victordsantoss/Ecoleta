const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

// Quando a ação for executada a classe será removida
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})
// Quando a ação for executada a classe será adicionada
close.addEventListener("click", () => {
    modal.classList.add("hide")
})