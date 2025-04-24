function generateRandomTable(rows, cols, min = 1, max = 100) {
    const container = document.getElementById('tableContainer');
    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < cols; j++) {
        const td = document.createElement('td');
        td.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    container.appendChild(table);
  }

  generateRandomTable(5, 6);