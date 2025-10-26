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

let prixHT = demanderNombre("Veuillez entrer le prix HT (positif) :");
if (prixHT === null) {
  document.body.innerText = "Opération annulée par l'utilisateur.";
} else {
  let tauxTVA = demanderNombre("Veuillez entrer le taux de TVA en % (positif) :");
  if (tauxTVA === null) {
    document.body.innerText = "Opération annulée par l'utilisateur.";
  } else {
    // Calcul du prix TTC
    let prixTTC = prixHT * (1 + tauxTVA / 100);
    document.body.innerText = `Le prix TTC est : ${prixTTC.toFixed(2)} €`;
  }
}
