const budget = prompt("ENTREZ le budget: "); 
const achats = prompt("ENTREZ les achats: "); 



if (budget >= achats) {
      document.getElementById("resultat").textContent = "Le budget permet de payer les achats."
} else {
      document.getElementById("resultat").textContent = "Le budget ne permet pas de payer les achats."
}