const PRODUCTS_URL='/data/products.json';
function getProductId(){return Number(new URLSearchParams(window.location.search).get('id'));}
async function loadProduct(){
const container=document.getElementById('product-details'); const id=getProductId();
if(!id){container.innerHTML='<p class="text-gray-500">No product selected.</p>'; return;}
try{
const res=await fetch(PRODUCTS_URL); if(!res.ok) throw new Error('Failed'); const products=await res.json();
const product=products.find(p=>p.id===id); if(!product){container.innerHTML='<p class="text-gray-500">Product not found.</p>'; return;}
document.title=`${product.name} — ETRBakes`;
container.innerHTML=`<img src="${product.image}" alt="${product.name}" class="w-full max-w-md mx-auto rounded-lg shadow mb-6 object-cover" style="height:300px"/>
<h1 class="text-3xl font-bold mb-2">${product.name}</h1>
<p class="text-xl text-indigo-600 mb-4">$${product.price.toFixed(2)}</p>
<p class="mb-6">${product.description}</p>
<button id="add-to-cart" class="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Add to Cart</button>`;
document.getElementById('add-to-cart').addEventListener('click',()=>window.ETRBakes.addToCart(product));
}catch{container.innerHTML='<p class="text-red-600">Error loading product.</p>';}
}
document.addEventListener('DOMContentLoaded',()=>{window.ETRBakes.updateCartCount(); loadProduct();});
