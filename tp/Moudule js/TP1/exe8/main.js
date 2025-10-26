function genererValeurAleatoire() {
  return Math.floor(Math.random() * 100) + 1;
}

function construireTableau(x, y) {
  const table = document.createElement("table");

  for (let i = 0; i < x; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < y; j++) {
      const cell = document.createElement("td");
      cell.textContent = genererValeurAleatoire();
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  return table;
}

const X = 5; 
const Y = 4; 

const container = document.getElementById("table-container");
const tableau = construireTableau(X, Y);
container.appendChild(tableau);
