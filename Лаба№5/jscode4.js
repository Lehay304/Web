function calculate() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operator").value;
  const resultEl = document.getElementById("result");

  if (isNaN(n1) || isNaN(n2)) {
    resultEl.textContent = "Ошибка: введите оба числа.";
    return;
  }

  let result;
  switch (op) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n2 !== 0 ? n1 / n2 : "Ошибка: деление на ноль";
      break;
    default:
      result = "Неизвестный оператор";
  }

  resultEl.textContent = result;
}