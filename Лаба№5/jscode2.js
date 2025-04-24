function generateMathTable(numbers) {
    const container = document.getElementById('resultTable');
    const table = document.createElement('table');

    // Заголовок
    const header = document.createElement('tr');
    ['Число', , 'Куб', 'Корень', 'Логарифм'].forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      header.appendChild(th);
    });
    table.appendChild(header);

    // Строки данных
    numbers.forEach(num => {
      const row = document.createElement('tr');

      const square = Math.pow(num, 2);
      const cube = Math.pow(num, 3);
      const sqrt = Math.sqrt(num).toFixed(2);
      const log = num > 0 ? Math.log10(num).toFixed(2) : '—';

      [num, square, cube, sqrt, log].forEach(val => {
        const td = document.createElement('td');
        td.textContent = val;
        row.appendChild(td);
      });

      table.appendChild(row);
    });

    container.appendChild(table);
  }

  // Примерный набор чисел
  const numbers = [1, 2, 3, 4, 5, 10, 100];
  generateMathTable(numbers);