function da() {
    const a = parseFloat(document.getElementById("first").value);
    const b = parseFloat(document.getElementById("second").value);
    const c = parseFloat(document.getElementById('third').value);
    var result = ((a + b) + c)/3;
    alert('Средняя зарплата: ' + result);
};
document.getElementById("third").addEventListener("blur", da);