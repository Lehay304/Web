function da () {
    const a = prompt("Введите первое число:");
    const b = prompt("Введите второе число:");
    if (a > b){
        alert(a);
    } else if (b > a){
        alert(b);
    } else {
        alert("Числа равны");
    }
}
document.addEventListener("click", da)