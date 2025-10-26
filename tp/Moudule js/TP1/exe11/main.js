function genererCouleurAleatoire() {
  const r = Math.floor(Math.random() * 256); // Rouge : 0–255
  const g = Math.floor(Math.random() * 256); // Vert : 0–255
  const b = Math.floor(Math.random() * 256); // Bleu : 0–255

  return `rgb(${r}, ${g}, ${b})`;
}

// Appliquer la couleur générée au fond du body
document.body.style.backgroundColor = genererCouleurAleatoire();
