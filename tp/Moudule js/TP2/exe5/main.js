function demanderNombre(message) {
  let valeur;
  do {
    valeur = prompt(message);
    if (valeur === null) { // Annulation
      alert("Opération annulée.");
      return null;
    }
    valeur = valeur.trim();
  } while (valeur === "" || isNaN(valeur) || Number(valeur) < 0);

  return Number(valeur);
}

function calculerPrixTTC() {
  const resultatElem = document.getElementById("resultat");

  const prixHT = demanderNombre("Veuillez saisir le prix HT (hors taxes) :");
  if (prixHT === null) {
    resultatElem.innerText = "Vous avez annulé la saisie.";
    return;
  }

  const tauxTVA = demanderNombre("Veuillez saisir le taux de TVA (en %) :");
  if (tauxTVA === null) {
    resultatElem.innerText = "Vous avez annulé la saisie.";
    return;
  }

  const prixTTC = prixHT * (1 + tauxTVA / 100);

  resultatElem.innerText =
    `Prix HT : ${prixHT.toFixed(2)} MAD\n` +
    `Taux TVA : ${tauxTVA.toFixed(2)} %\n` +
    `Prix TTC : ${prixTTC.toFixed(2)} MAD`;
}

// Lancer la fonction au chargement de la page
window.addEventListener("DOMContentLoaded", calculerPrixTTC);
