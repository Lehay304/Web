function da() {
    const Messagge = document.getElementById("Messagge")
    var a = prompt("Введите свой возраст:");
    if (a < 18){
        Messagge.textContent="Вам меньше 18. Вход запрещён! Закрываем страницу >:(";
        setTimeout(() => {
            window.close();
        }, 5000);
    } else if (a >= 18 && a < 110) {
        Messagge.textContent = "Вам больше 18. Добро пожаловать!";
    } else {
        Messagge.textContent = "Ты кто ваще?";
    }
}; 
document.addEventListener("click", da)