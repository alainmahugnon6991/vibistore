let panier = JSON.parse(localStorage.getItem("panier")) || [];

const boutons = document.querySelectorAll(".panier");
const compteur = document.querySelector(".count");

// calcul total
function updateCounter() {
  let total = panier.reduce((sum, item) => {
    return sum + item.prix;
  }, 0);

  compteur.textContent = total.toLocaleString();
}

// ajouter produit
boutons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const carte = e.target.closest(".carte-produit");

    const id = carte.dataset.id;
    const nom = carte.querySelector("h3").textContent;
    const prix = Number(carte.dataset.price);

    if (isNaN(prix)) {
      console.error("Prix invalide !");
      return;
    }

    const produit = {
      id: id,
      nom: nom,
      prix: prix,
    };

    panier.push(produit);

    localStorage.setItem("panier", JSON.stringify(panier));

    updateCounter();

    console.log("Panier :", panier);
  });
});

// init
updateCounter();