document.addEventListener("DOMContentLoaded", () => {
  const btnEnvoyer = document.getElementById("envoyer");
  const affichage = document.getElementById("affichage");

  btnEnvoyer.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const objet = document.getElementById("objet").value.trim();
    const corps = document.getElementById("corps").value.trim();

    // Affichage des valeurs sous le formulaire
    affichage.innerHTML = `
      Sender : ${email} <br>
      Objet : ${objet} <br>
      Corps de l'email : ${corps}
    `;
  });
});
