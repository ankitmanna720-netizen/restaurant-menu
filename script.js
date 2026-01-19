// SEARCH FUNCTION
function searchItems() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.getAttribute("data-name");
    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
function searchItems() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.getAttribute("data-name");
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

function filterItems(category) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let itemCategory = card.getAttribute("data-category");
    card.style.display =
      category === "all" || itemCategory === category ? "block" : "none";
  });
}
