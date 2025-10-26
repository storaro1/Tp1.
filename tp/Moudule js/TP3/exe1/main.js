document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formInscription");
  const recap = document.getElementById("recap");
  const btnAnnuler = document.getElementById("btnAnnuler");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validation des champs
    const nom = form.nom.value.trim();
    const prenom = form.prenom.value.trim();
    const email = form.email.value.trim();
    const mdp = form.mdp.value;
    const mdp2 = form.mdp2.value;
    const tel = form.tel.value.trim();
    const langue = form.langue.value;
    const commentaire = form.commentaire.value.trim();

    let erreurs = [];

    if (!nom) erreurs.push("Le champ Nom est obligatoire.");
    if (!prenom) erreurs.push("Le champ Prénom est obligatoire.");
    if (!email) erreurs.push("Le champ E-mail est obligatoire.");
    else if (!validateEmail(email)) erreurs.push("Le format de l'email est incorrect.");
    if (!mdp) erreurs.push("Le champ Mot de passe est obligatoire.");
    if (!mdp2) erreurs.push("Le champ Resaisir le mot de passe est obligatoire.");
    if (mdp && mdp2 && mdp !== mdp2) erreurs.push("Les mots de passe ne correspondent pas.");
    if (!tel) erreurs.push("Le champ Téléphone est obligatoire.");
    if (!langue) erreurs.push("Veuillez choisir une langue.");
    if (!commentaire) erreurs.push("Le champ Commentaire est obligatoire.");

    if (erreurs.length > 0) {
      recap.style.color = "red";
      recap.textContent = erreurs.join("\n");
      return;
    }

    // Affichage récapitulatif
    recap.style.color = "black";
    recap.textContent = `Récapitulatif :\n
Nom : ${nom}
Prénom : ${prenom}
E-mail : ${email}
Téléphone : ${tel}
Langue : ${langue}
Commentaire : ${commentaire}`;
  });

  btnAnnuler.addEventListener("click", () => {
    form.reset();
    recap.textContent = "";
  });

  function validateEmail(email) {
    // simple regex pour email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
