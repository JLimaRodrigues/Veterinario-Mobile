import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export const useCart = () => {
  return useContext(CarrinhoContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({}); // Objeto para armazenar itens com suas quantidades

  const addItemToCart = (item) => {
    const itemId = item.id;
    const newCartItems = { ...cartItems };

    if (newCartItems[itemId]) {
      newCartItems[itemId] += 1; // Incrementa a quantidade se o item já estiver no carrinho
    } else {
      newCartItems[itemId] = 1; // Adiciona o item ao carrinho com quantidade inicial de 1
    }

    setCartItems(newCartItems);
  };

  const removeItemFromCart = (itemId, quantityToRemove = 1) => {
    const newCartItems = { ...cartItems };

    if (newCartItems[itemId]) {
      newCartItems[itemId] -= quantityToRemove; // Reduz a quantidade do item no carrinho
      if (newCartItems[itemId] <= 0) {
        delete newCartItems[itemId]; // Remove o item do carrinho se a quantidade for zero ou menos
      }
      setCartItems(newCartItems);
    }
  };

  const clearCart = () => {
    setCartItems({}); // Limpa todos os itens do carrinho
  };

  return (
    <CarrinhoContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
