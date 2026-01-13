const PRODUCTS_URL='/data/products.json';
let allProducts=[];
async function fetchProducts() {
try { const res=await fetch(PRODUCTS_URL); if(!res.ok) throw new Error('Failed'); return await res.json(); }
catch { return []; }
}
function addToCart(product) { window.ETRBakes.addToCart(product,1); }
function createCard(product){
const wrapper=document.createElement('div'); wrapper.className='flex justify-center';
const card=document.createElement('div');
card.className='group bg-white rounded-xl shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-64 cursor-pointer';
card.innerHTML=`<div class="bg-gray-100 overflow-hidden h-48 rounded-t-xl"><img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/></div>
<div class="p-4">
<h3 class="font-semibold mb-1">${product.name}</h3>
<p class="text-sm text-gray-600 mb-1">$${product.price.toFixed(2)}</p>
<p class="text-sm text-gray-500 line-clamp-2">${product.description}</p>
<button data-id="${product.id}" class="add-to-cart mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">Add to Cart</button>
</div>`;
card.addEventListener('click',()=>window.location.href=`/product.html?id=${product.id}`);
wrapper.appendChild(card);
return wrapper;
}
function renderProducts(products,targetId='catalog-grid'){
const root=document.getElementById(targetId); if(!root) return; root.innerHTML=''; const fragment=document.createDocumentFragment();
products.forEach(p=>fragment.appendChild(createCard(p)));
root.appendChild(fragment);
}
function setupSearch() {
const input=document.getElementById('search-input'); if(!input) return;
input.addEventListener('input',()=>{ const filtered=allProducts.filter(p=>p.name.toLowerCase().includes(input.value.toLowerCase())||p.description.toLowerCase().includes(input.value.toLowerCase())); renderProducts(filtered); });
}
document.addEventListener('click',e=>{
const btn=e.target.closest('.add-to-cart'); if(!btn) return; e.stopPropagation();
const product=allProducts.find(p=>p.id==btn.dataset.id); if(product) addToCart(product);
});
document.addEventListener('DOMContentLoaded',async()=>{
allProducts=await fetchProducts();
renderProducts(allProducts.slice(0,2),'featured-grid');
renderProducts(allProducts);
setupSearch();
window.ETRBakes.updateCartCount();
});
