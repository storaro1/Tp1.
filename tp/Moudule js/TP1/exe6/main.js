function demanderNombre(message) {
  let valeur;
  do {
    valeur = prompt(message);
    if (valeur === null) {
      return null; 
    }
    valeur = valeur.trim();
  } while (
    valeur === "" ||
    isNaN(valeur) ||
    Number(valeur) < 0
  );
  return Number(valeur);
}

const prixHT = demanderNombre("Veuillez entrer le prix HT (positif) :");
if (prixHT === null) {
  document.body.innerHTML = "<p>Opération annulée par l'utilisateur.</p>";
} else {
  const tauxTVA = demanderNombre("Veuillez entrer le taux de TVA en % (positif) :");
  if (tauxTVA === null) {
    document.body.innerHTML = "<p>Opération annulée par l'utilisateur.</p>";
  } else {
    const prixTTC = prixHT * (1 + tauxTVA / 100);
    const couleur = prixTTC > 100 ? "red" : "green";

    document.body.innerHTML = `<h1 style="color: ${couleur};">Le prix TTC est : ${prixTTC.toFixed(2)} €</h1>`;
  }
}
