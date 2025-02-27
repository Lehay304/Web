function da() {
    const a = document.getElementById("Messagge")
    if (confirm("Давай выбирай") == true){
        a.textContent = ("Выбрали да")
    } else {
        a.textContent = ("Выбрали нет")
    }
}
document.addEventListener("click", da)