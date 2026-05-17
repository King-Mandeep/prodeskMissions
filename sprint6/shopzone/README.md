# ShopZone 🛒

ShopZone is a modern e-commerce single-page application built with React, React Router, Context API, and Tailwind CSS.

## 🚀 Live Demo

Add your deployed Vercel link here.

## 📂 GitHub Repository

Add your GitHub repository link here.

---

## ✨ Features

### Phase 1

* Home page with hero section
* Shop page with product listing
* Product details page with dynamic routing
* Contact page

### Phase 2

* Global cart state using Context API
* Add to Cart functionality
* Cart item count badge in navbar
* Cart page with quantity and total price
* Remove items from cart
* Cart persistence using localStorage

### UI Features

* Responsive navigation bar
* Mobile hamburger menu
* Modern Tailwind CSS design
* Sticky navbar

---

## 🛠️ Tech Stack

* React
* Vite
* React Router DOM
* Context API
* Tailwind CSS
* DummyJSON API

---

## 📁 Folder Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔗 API Used

https://dummyjson.com/products

---

## ⚙️ Installation and Setup

```bash
git clone <your-repository-url>
cd shopzone
npm install
npm run dev
```

---

## 🌐 Deployment

This project is deployed on Vercel.

To deploy:

1. Push code to GitHub.
2. Import the repository into Vercel.
3. Deploy.

If using React Router, add a `vercel.json` file:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🎥 Demo Video

Add your demo video link here.

---

## 👨‍💻 Author

Mandeep Tiwari
