function genererNombreAleatoire() {
  return Math.floor(Math.random() * 100); // 0 ... 99
}

function creerListeAleatoire() {
  const ul = document.createElement("ul");

  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = genererNombreAleatoire();
    ul.appendChild(li);
  }

  return ul;
}

// Insertion de la liste dans un conteneur existant
const container = document.getElementById("liste-container");
const liste = creerListeAleatoire();
container.appendChild(liste);
