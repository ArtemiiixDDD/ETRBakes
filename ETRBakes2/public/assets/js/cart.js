function formatMoney(n){return '$'+n.toFixed(2);}
function renderCart(){
const root=document.getElementById('cart-root');
const cart=window.ETRBakes.getCart();
if(!root) return;
if(!cart.length){root.innerHTML='<p>Your cart is empty. <a href="/catalog.html" class="text-indigo-600">Browse products</a></p>'; return;}
let html='<div class="space-y-4">',total=0;
cart.forEach((it,idx)=>{
const line=it.price*it.quantity; total+=line;
html+=`<div class="bg-white p-4 rounded shadow flex items-center justify-between">
<div class="flex items-center space-x-4">
<img src="${it.image}" alt="${it.name}" class="w-20 h-20 object-cover rounded"/>
<div><div class="font-semibold">${it.name}</div><div class="text-sm text-gray-600">${formatMoney(it.price)} each</div></div>
</div>
<div class="flex items-center space-x-4">
<input type="number" min="1" value="${it.quantity}" data-idx="${idx}" class="w-20 border rounded px-2 py-1 qty-input"/>
<div class="font-semibold">${formatMoney(line)}</div>
<button data-idx="${idx}" class="remove text-sm text-red-600">Remove</button>
</div>
</div>`;
});
html+='</div><div class="mt-6 flex items-center justify-between"><div class="font-bold text-lg">Total: '+formatMoney(cart.reduce((s,it)=>s+it.price*it.quantity,0))+'</div><a href="/checkout.html" class="bg-indigo-600 text-white px-4 py-2 rounded">Proceed to checkout</a></div>';
root.innerHTML=html;
document.querySelectorAll('.qty-input').forEach(inp=>inp.addEventListener('change',e=>{
const idx=Number(e.target.dataset.idx); const val=Math.max(1,Number(e.target.value||1));
const cart=window.ETRBakes.getCart(); cart[idx].quantity=val; window.ETRBakes.setCart(cart); renderCart();
}));
document.querySelectorAll('.remove').forEach(btn=>btn.addEventListener('click',e=>{
const idx=Number(e.target.dataset.idx); const cart=window.ETRBakes.getCart(); cart.splice(idx,1); window.ETRBakes.setCart(cart); renderCart();
}));
}
document.addEventListener('DOMContentLoaded',renderCart);
