function addition(val1, val2) {
  return val1 + val2;
}

function minus(val1, val2) {
  return val1 - val2;
}

function multiplication(val1, val2) {
  return val1 * val2;
}

function fraction(val1, val2) {
  return val1 / val2;
}

function permutationInputs() {
  const input1 = document.getElementById("nombre1");
  const input2 = document.getElementById("nombre2");

  const tmp = input1.value;
  input1.value = input2.value;
  input2.value = tmp;
}

function calculer() {
  const operationSelect = document.getElementById("operation");
  const operation = operationSelect.value;
  const resultatSpan = document.getElementById("resultat");

  const input1 = document.getElementById("nombre1");
  const input2 = document.getElementById("nombre2");
  const val1 = parseFloat(input1.value);
  const val2 = parseFloat(input2.value);

  if (operation === "") {
    resultatSpan.textContent = "Veuillez choisir une opération.";
    return;
  }

  if (isNaN(val1) || isNaN(val2)) {
    resultatSpan.textContent = "Veuillez saisir deux nombres valides.";
    return;
  }

  if (operation === "addition") {
    const somme = addition(val1, val2);
    resultatSpan.textContent = `Résultat : ${somme}`;
  } else if (operation === "multiplication") {
    const res = multiplication(val1, val2);
    resultatSpan.textContent = `Résultat : ${res}`;
  } else if (operation === "minus") {
    const res = minus(val1, val2);
    resultatSpan.textContent = `Résultat : ${res}`;
  } else if (operation === "fraction") {
    const res = fraction(val1, val2);
    resultatSpan.textContent = `Résultat : ${res}`;
  } else if (operation === "permutation") {
    permutationInputs();
    resultatSpan.textContent = "Les nombres ont été permutés.";
  } else {
    resultatSpan.textContent = "Opération non reconnue.";
  }
}



document.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("btnCalculer");
  bouton.addEventListener("click", calculer);
})
