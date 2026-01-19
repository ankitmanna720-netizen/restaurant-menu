const menu = [
  { name: "Chicken Biryani", price: 180, item: "Chicken Biryani" },
  { name: "Mutton Biryani", price: 250, item: "Mutton Biryani" },
  { name: "Chicken Roll", price: 80, item: "Chicken Roll" },
  { name: "Chicken Burger", price: 120, item: "Chicken Burger" }
];

function loadMenu() {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = "";
  menu.forEach(m => {
    grid.innerHTML += `
      <div class="card">
        <h3>${m.name}</h3>
        <p>₹${m.price}</p>
        <a class="order"
        href="https://wa.me/91XXXXXXXXXX?text=I want to order ${m.item}">
        Order
        </a>
      </div>`;
  });
}

window.onload = loadMenu;
