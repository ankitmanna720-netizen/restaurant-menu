function orderItem(item, price) {
  const phone = "919123456789"; // +91 সহ
  const message =
    "Hello, I want to order:\n\n" +
    "Item: " + item + "\n" +
    "Price: ₹" + price;

  const url =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
