'use client';

import { CartItem } from '@/app/types/CartItem';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem(
      'aurastore_cart'
    );

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);

    localStorage.setItem(
      'aurastore_cart',
      JSON.stringify(newCart)
    );
  };

  const addToCart = (
    item: Omit<CartItem, 'quantity'>
  ) => {
    const existingProduct = cart.find(
      (product) => product.id === item.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === item.id) {
          return {...product, quantity: product.quantity + 1};
        }

        return product;
      });

      saveCart(updatedCart);
    } else {
      const updatedCart = [
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ];

      saveCart(updatedCart);
    }
  };

  const removeFromCart = (id: string) => {
    const product = cart.find(
      (item) => item.id === id
    );

    if (!product) return;

    if (product.quantity > 1) {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });

      saveCart(updatedCart);
    } else {
      const updatedCart = cart.filter(
        (item) => item.id !== id
      );

      saveCart(updatedCart);
    }
  };

  const clearCart = () => {
    saveCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used within a CartProvider'
    );
  }

  return context;
}