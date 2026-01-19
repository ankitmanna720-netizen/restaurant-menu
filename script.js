function filterMenu(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function sendOrder() {
  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const phone = document.getElementById("phone").value;

  const msg = `Name: ${name}%0AItem: ${item}%0APhone: ${phone}`;
  window.open(`https://wa.me/919123456789?text=${msg}`, "_blank");
}
