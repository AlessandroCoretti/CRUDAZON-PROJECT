class ProductEvent {
  constructor(name, description, brand, img, price) {
    this.eventName = name;
    this.eventDescription = description;
    this.eventBrand = brand;
    this.eventImg = img;
    this.eventPrice = price;
  }
}

const generateCard = function (obj) {
  const cardRow = document.getElementById("card-row");
  const col = document.createElement("div");
  col.className = "col";

  col.innerHTML = `<div class="card">
    <img src="${obj.eventImg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">"${obj.eventName}"</h5>
      <p class="card-text">"${obj.eventDescription}"</p>
      <p class="card-text">"${obj.eventBrand}"</p>
      <p class="card-text">"${obj.eventPrice}"</p>
      <a href="./index.html" class="btn btn-primary">See more</a>
    </div>
  </div>`;

  cardRow.appendChild(col);
};

window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputName = document.querySelector("product-name");
  const inputDescription = document.querySelector("product-description");
  const inputBrand = document.querySelector("product-brand");
  const inputImg = document.querySelector("product-img");
  const inputPrice = document.querySelector("product-price");

  form.onsubmit = function (e) {
    e.preventDefault();
    const product = new ProductEvent(inputName.value, inputDescription.value, inputBrand.value, inputImg.value, inputPrice.value);
    generateCard(product);
  };
});
