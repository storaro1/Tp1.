function permutation() {
  const input1 = document.getElementById("nombre1");
  const input2 = document.getElementById("nombre2");
  const val1 = parseFloat(input1.value);
  const val2 = parseFloat(input2.value);
  const resultatSpan = document.getElementById("resultat");

  if (!isNaN(val1) && !isNaN(val2)) {
    input1.value=val2;
    input2.value=val1;
    resultatSpan.textContent = "permuation done successfully !";
  } else {
    resultatSpan.textContent = "Veuillez saisir deux nombres valides.";
  }
}

// Attacher l'événement au bouton une fois le DOM chargé
document.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("btnAddition");
  bouton.addEventListener("click", permutation);
});
