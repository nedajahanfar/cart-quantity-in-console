let cartQuantity = 0;

function showQuantity() {
  console.log(`cart quantity : ${cartQuantity}`);

}

function addToCart() {
  cartQuantity += 1;
  console.log(`cart quantity : ${cartQuantity}`)
}

function add2() {
  cartQuantity += 2;
  console.log(`cart quantity : ${cartQuantity}`);
}

function add3() {
  cartQuantity += 3;
  console.log(`cart quantity : ${cartQuantity}`);
}

function resetCart() {
  cartQuantity = 0;
  console.log('cart was reset');
  console.log(`cart quantity : ${cartQuantity}`);

}
