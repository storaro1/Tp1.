document.addEventListener("DOMContentLoaded", () => {

  const monLien = document.getElementById("menu");
  monLien.addEventListener("click", function(event) {
    event.preventDefault();  
    alert("Redirection interdite");
  });

  const clicDiv = document.getElementById("clicDiv");
  const menu = document.getElementById("menu");
  const menuContainer = document.getElementById("menu-container");

  clicDiv.addEventListener("click", () => {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });


  menuContainer.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });
});
