import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const foundProduct = updatedCart.find((item) => item.id === product.id);
    if (foundProduct) {
      foundProduct.quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,setCart }}>
      {children}
    </CartContext.Provider>
  );
};