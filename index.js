const getProducts = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjNmMDhhZDEyOTAwMTU4NzZjOWYiLCJpYXQiOjE3MzE2NjY5MjgsImV4cCI6MTczMjg3NjUyOH0.LaR3KeUb-ytvNgroNjaPCRaYN8xnL5v4UWI8vdvxkTg",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })
    .then((products) => console.log(products))
    .catch((error) => console.log(error));
};

window.addEventListener("DOMContentLoaded", function () {
  getProducts();
});
