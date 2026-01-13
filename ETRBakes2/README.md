# Static Shop (Tailwind)

A simple static e-commerce shop scaffold using Tailwind (CDN), plain HTML/CSS/JS, and a local JSON product catalog.

## What’s included ✅
- Pages: `index.html`, `catalog.html`, `product.html`, `cart.html`, `checkout.html`
- Assets: `assets/css/styles.css`, `assets/js/*.js`
- Product data: `data/products.json` (8 sample products using `picsum.photos` images)
- Cart persisted in `localStorage` with add/remove/update features
- Dummy checkout (client-side validation, clears cart on success)
- `package.json` with `start` script using `live-server` for local testing

## Quick start 🧭
1. Install dev deps:

```bash
npm install
```

2. Run locally:

```bash
npm start
```

3. Open the site (should open automatically): `http://127.0.0.1:8080/index.html`

## Local structure
```
public/
  index.html
  catalog.html
  product.html
  cart.html
  checkout.html
  assets/
    css/styles.css
    js/main.js
    js/catalog.js
    js/product.js
    js/cart.js
  data/products.json
  favicon.svg
```

## Next steps / Roadmap 🔜
- Integrate Stripe for real payments (serverless functions or backend)
- Add a lightweight backend (Node/Express or Firebase) to handle orders & inventory
- Add admin dashboard for product management
- Add tests and accessibility audit

---

If you want, I can run a test session or add more product data and images next. Tell me which step to take next.