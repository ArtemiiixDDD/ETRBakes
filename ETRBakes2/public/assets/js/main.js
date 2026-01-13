(function () {
const CART_KEY = 'ETRBakes-cart';
function getCart() {
try { return JSON.parse(localStorage.getItem(CART_KEY)||'[]'); }
catch { return []; }
}
function setCart(items) {
localStorage.setItem(CART_KEY,JSON.stringify(items));
updateCartCount();
}
function updateCartCount() {
const count = getCart().reduce((sum,item)=>sum+item.quantity,0);
const el=document.getElementById('cart-count');
if(el) el.textContent=String(count);
}
function addToCart(product,qty=1) {
const cart=getCart();
const existing=cart.find(p=>p.id===product.id);
if(existing) existing.quantity+=qty;
else cart.push({...product,quantity:qty});
setCart(cart);
}
window.ETRBakes={getCart,setCart,updateCartCount,addToCart};
document.addEventListener('DOMContentLoaded',updateCartCount);
})();
