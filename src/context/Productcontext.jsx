import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🛒 Add to Cart with Quantity Support
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ❌ Remove product from cart
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // ➕ Increase quantity
  const increment = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ➖ Decrease quantity (but not below 1)
  const decrement = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // 📦 Fetch Products
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  // 🧠 Context Provider
  return (
    <ProductContext.Provider value={{
      products,
      cart,
      loading,
      addToCart,
      removeFromCart,
      increment,
      decrement
    }}>
      {children}
    </ProductContext.Provider>
  );
}
