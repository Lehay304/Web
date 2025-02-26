function zadanie() {
    const a = prompt("Введите количество часов: ");
    const b = prompt("Введите оплату за час: ");
    var result = a * b;
    alert(result)
}
document.getElementById("zpButton").addEventListener("focus", zadanie);
