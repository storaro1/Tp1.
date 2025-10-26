function estNombre(val) {

  return !isNaN(val) && val.trim() !== "";
}

function verifierVariables() {
  const val1 = document.getElementById("val1").value;
  const val2 = document.getElementById("val2").value;
  const val3 = document.getElementById("val3").value;
  const resultat = document.getElementById("resultat");


  if (!estNombre(val1)) {
    resultat.textContent = "Veuillez saisir un nombre valide pour la valeur 1.";
    return;
  }
  if (!estNombre(val2)) {
    resultat.textContent = "Veuillez saisir un nombre valide pour la valeur 2.";
    return;
  }
  if (!estNombre(val3)) {
    resultat.textContent = "Veuillez saisir un nombre valide pour la valeur 3.";
    return;
  }


  const num1 = parseFloat(val1);
  const num2 = parseFloat(val2);
  const num3 = parseFloat(val3);

  if (num1 === num2 && num2 === num3) {
    resultat.textContent = "Les trois variables sont identiques.";
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    resultat.textContent = "Deux des variables sont de valeurs égales.";
  } else {
    resultat.textContent = "Les trois variables sont différentes.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnVerifier").addEventListener("click", verifierVariables);
});
