const numeroVendeur = "2290167816739";

const boutons = document.querySelectorAll(".panier");

boutons.forEach((bouton) => {
  bouton.addEventListener("click", (e) => {
    e.stopPropagation();

    const produit = bouton.closest(".carte-produit");

    const nom = produit.querySelector("h3").innerText;
    const prix = produit.querySelector("h4").innerText;

    const message = `Bonjour 👋
Je souhaite commander ce produit :

🛍 Produit : ${nom}
💰 Prix : ${prix}

Merci.`;

    const url = `https://api.whatsapp.com/send?phone=${numeroVendeur}&text=${encodeURIComponent(message)}`;

    window.location.href = url;
  });
});