document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formTableau");
  const erreurDiv = document.getElementById("erreur");
  const tableContainer = document.getElementById("table-container");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    erreurDiv.textContent = "";
    tableContainer.innerHTML = "";

    const dimensionStr = form.dimension.value.trim();
    const valMinStr = form.valMin.value.trim();
    const valMaxStr = form.valMax.value.trim();

    // Validation : doivent être des entiers et non vides
    if (!isInteger(dimensionStr) || !isInteger(valMinStr) || !isInteger(valMaxStr)) {
      erreurDiv.textContent = "Tous les champs doivent contenir des entiers valides.";
      return;
    }

    const dimension = parseInt(dimensionStr, 10);
    const valMin = parseInt(valMinStr, 10);
    const valMax = parseInt(valMaxStr, 10);

    if (valMin >= valMax) {
      erreurDiv.textContent = "La valeur minimale doit être inférieure à la valeur maximale.";
      return;
    }

    // Génération des nombres aléatoires
    const nombres = [];
    for (let i = 0; i < dimension; i++) {
      nombres.push(randomIntBetween(valMin, valMax));
    }

    // Création du tableau avec retour à la ligne si nombre de colonnes = 10
    const table = document.createElement("table");
    let tr = document.createElement("tr");

    nombres.forEach((num, index) => {
      const td = document.createElement("td");
      td.textContent = num;
      tr.appendChild(td);

      if ((index + 1) % 10 === 0) {
        table.appendChild(tr);
        tr = document.createElement("tr");
      }
    });

    // Ajouter la dernière ligne si elle n'est pas vide
    if (tr.children.length > 0) {
      table.appendChild(tr);
    }

    tableContainer.appendChild(table);
  });

  function isInteger(value) {
    return /^-?\d+$/.test(value);
  }

  function randomIntBetween(min, max) {
    // inclus min et max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
