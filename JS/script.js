let productDiv = document.querySelector(".product-container");

let disPlayProduct = async () => {
  productDiv.innerHTML = "";

  let product = await fetch("https://fakestoreapi.com/products");
  let finalProduct = await product.json();

  productDiv.style.display = "flex";
  productDiv.style.flexWrap = "wrap";
  productDiv.style.justifyContent = "space-between";

  finalProduct.forEach((element) => {
    productDiv.innerHTML += `
      <div class="card-container my-2 px-2 col-lg-3 col-md-4 col-6">
        <div class="card text-center d-flex flex-column justify-content-between" style="height: 350px;">
          <img src="${element.image}" class="card-img-top p-4 img-fluid" alt="${element.title}" style="height: 200px; object-fit: contain;">
          <div class="card-body d-flex flex-column justify-content-end">
            <p class="card-text my-2">Price: Rs. ${element.price} | Rating: ${element.rating.rate}</p>
            <h5 class="card-title fs-6" style="max-height: 40px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${element.title}
            </h5>
            <a href="#" class="btn bg-success text-white mt-auto" style="width: 100%;">Add To Cart</a>
          </div>
        </div>
      </div>
    `;
  });
};

disPlayProduct();

