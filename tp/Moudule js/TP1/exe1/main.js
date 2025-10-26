const message = prompt("Entrez un message:");

console.log(message)


if (message == '') {
    document.getElementById("resultat").textContent = "madrid";

} else {
    document.getElementById("resultat").textContent = message;

}
