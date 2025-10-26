    let prixHT = prompt("Veuillez entrer le prix HT :");

    prixHT = parseFloat(prixHT);

    if (!isNaN(prixHT)) {
      let prixTTC = prixHT * 1.20;

      document.body.innerText = "Le prix TTC est : " + prixTTC.toFixed(2) + " MAD";
    } else {
      document.body.innerText = "Erreur : veuillez entrer un nombre valide.";
    }