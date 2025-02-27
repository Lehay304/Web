function da () {
    var a = prompt("Введите первое число:");
    if (a == 12 || a == 1 || a == 2){
        alert("Зима");
    } else if (a == 3 || a == 4 || a == 5){
        alert("Весна");
    } else if (a == 6 || a == 7 || a == 8){
        alert("Лето");
    } else {
        alert("Осень");
    } 
}
document.addEventListener("click", da)