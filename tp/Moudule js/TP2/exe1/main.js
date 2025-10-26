function addition() {
  const val1 = parseFloat(document.getElementById("nombre1").value);
  const val2 = parseFloat(document.getElementById("nombre2").value);
  const resultatSpan = document.getElementById("resultat");

  if (!isNaN(val1) && !isNaN(val2)) {
    const somme = val1 + val2;
    resultatSpan.textContent = somme;
  } else {
    resultatSpan.textContent = "Veuillez saisir deux nombres valides.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("btnAddition");
  bouton.addEventListener("click", addition);
});
