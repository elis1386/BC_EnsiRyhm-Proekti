const pathToImages = 'image';
const pathToProductsImages = `${pathToImages}/gallery`;


function currentPhoto(product) {
  return `
<figure class="photo">
    <img src="${pathToProductsImages}/${product.image}" alt="" />
</figure>
<article class="description">
    <h1 class="product_title">${product.name}</h1>
    <article class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <p class="price">${product.price}</p>
        <a href="../cartPage/index.html?id=${product.id}" class="add_to_cart" id="addToCart">Add to cart</a>
    </article>
</article>
    `;
}

function insertCurrentPhoto() {
  const item = document.querySelector("#current_photo");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  for (let product of products) {
    if (product.id == productId) {
        console.log(product,productId)
      item.insertAdjacentHTML("afterbegin", currentPhoto(product));
      break;
    }
  }
}
insertCurrentPhoto()



