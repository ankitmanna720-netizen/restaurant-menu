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
<script>
function selectItem(itemName) {
  document.getElementById("item").value = itemName;
  document.getElementById("item").scrollIntoView({behavior: "smooth"});
}

function sendOrder() {
  let name = document.getElementById("name").value;
  let item = document.getElementById("item").value;
  let phone = document.getElementById("phone").value;

  let text = `Order Details:%0AName: ${name}%0AItem: ${item}%0APhone: ${phone}`;
  window.open("https://wa.me/919123456789?text=" + text, "_blank");
}
</script>
<script>
let total = 0;

function changeQty(btn, val) {
  let span = btn.parentElement.querySelector("span");
  let qty = parseInt(span.innerText) + val;
  if (qty < 1) qty = 1;
  span.innerText = qty;
}

function addToOrder(btn, name) {
  let card = btn.closest(".card");
  let price = parseInt(card.dataset.price);
  let qty = parseInt(card.querySelector(".qty span").innerText);

  document.getElementById("item").value = name + " x " + qty;
}

function sendOrder() {
  let name = document.getElementById("name").value;
  let item = document.getElementById("item").value;
  let phone = document.getElementById("phone").value;

  let msg = `Order Details:%0AName: ${name}%0AItem: ${item}%0APhone: ${phone}`;
  window.open("https://wa.me/919123456789?text=" + msg);
}

/* SEARCH */
function searchItem(val) {
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(val.toLowerCase())
      ? "block" : "none";
  });
}

/* FILTER */
function filterItems(type) {
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.display =
      type === "all" || card.classList.contains(type)
      ? "block" : "none";
  });
}
</script>
<script>
function filterFood(cat){
  let cards=document.querySelectorAll('.card');
  cards.forEach(c=>{
    c.style.display=(cat=='all'||c.classList.contains(cat))?'block':'none';
  });
}

function searchFood(){
  let v=document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('.card').forEach(c=>{
    c.style.display=c.innerText.toLowerCase().includes(v)?'block':'none';
  });
}
</script>
