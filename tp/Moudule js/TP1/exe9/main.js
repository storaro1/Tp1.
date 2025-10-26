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

let X = parseInt(prompt("Combien de lignes voulez-vous ?"), 10);
let Y = parseInt(prompt("Combien de colonnes voulez-vous ?"), 10);

if (isNaN(X) || X <= 0 || isNaN(Y) || Y <= 0) {
  alert("Veuillez entrer des nombres valides pour les lignes et les colonnes.");
} else {
  const container = document.getElementById("table-container");
  const tableau = construireTableau(X, Y);
  container.appendChild(tableau);
}
