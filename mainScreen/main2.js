  
  /* MODAL FUNCTIONS */

  function sendMessageModal() {
    const dialog = document.querySelector("#dialog");
    dialog.showModal();
  }


  function showCartModal()
  {   
    let amount = count.textContent
    if(amount == 0)
    {
      const cartDialog = document.querySelector('#cart_dialog')
      cartDialog.showModal()
    }
    else{
      const cartDialog2 = document.querySelector('.cart_dialog2')
      cartDialog2.showModal()
    }
  }


  function closeModal()
  {
      const closeModal = document.querySelector('#clodeModal')
      closeModal.closeModal()
  }
  
  


  /* CART FINCTIONS */
const cartEl = document.querySelector('.cart');
const cartTotalEl = document.querySelector('.cartTotal');
const cartTotalValueEl = document.querySelector('.cartTotalValue');

  let cart = {};
  let count = document.querySelector('#count')
  // increase cart count
  function increaseCount()
  {
    count.textContent++
  }
/**
 * Метод добавляет продукт в объект cart
 */
function addProductToObject(productId) {
    if (!(productId in cart)) {
        cart[productId] = 1;
    } else {
        cart[productId]++;
    }
}

/**
 * Функция срабатывает когда нужно отрисовать продукт в корзине.
 * @param {number} productId
 */
function renderProductInCart(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInCart(productId);
    }
}
/**
 * Функция отрисовывает новый товар в корзине.
 * @param {number} productId
 */
function renderNewProductInCart(productId) {
    let productRow = `
        <article class="cartRow">
            <p>${productId.name}</p>
            <p>$${productId.price}</p>
            <article>
                $<span class="productTotalRow" data-productId="${productId}">${productId.price}</span>
            </article>
        </article>
    `;
    cartTotalEl.insertAdjacentHTML("beforebegin", productRow);
}


/**
 * Функция пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 * @param {number} productId
 */
function recalculateSumForProduct(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (cart[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

/**
 * Функция пересчитывает общую стоимость корзины и выводит это значение на страницу.
 */
function calculateAndRenderTotalCartSum() {
    let totalSum = 0;
    for (let productId in cart) {
        totalSum += cart[productId] * products[productId].price;
    }
    cartTotalValueEl.textContent = totalSum.toFixed(2);
}


/**
 * Эта функция срабатывает когда добавляют новый товар в корзину.
 * @param {number} productId
 */
function addProductIntoCart(productId) {
    increaseCount();
    addProductToObject(productId);
    renderProductInCart(productId);
    calculateAndRenderTotalCartSum();
}

  

  
  
  




  
  
  
  