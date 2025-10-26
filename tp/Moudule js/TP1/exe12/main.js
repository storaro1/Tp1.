function genererIdAleatoire() {
  return Math.floor(Math.random() * 1085); // 0 ... 1084
}

function insererImagesPicsum(nombreImages = 12) {
  const container = document.getElementById("image-container");

  for (let i = 0; i < nombreImages; i++) {
    const id = genererIdAleatoire();
    const img = document.createElement("img");
    img.src = `https://picsum.photos/id/${id}/350/350`;
    img.alt = `Image aléatoire #${id}`;
    img.style.margin = "10px";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    container.appendChild(img);
  }
}

insererImagesPicsum();
