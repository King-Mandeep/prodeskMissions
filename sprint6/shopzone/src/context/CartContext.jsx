import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("shopzone-cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(
      "shopzone-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Total number of items
  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}