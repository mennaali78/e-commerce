"use client";
import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from "react";
import getLoggedUserCart from "@/CartActions/getUserCart.action";

type CartContextType = {
  numberOfCartItem: number;
  setnumberOfCartItem: Dispatch<SetStateAction<number>>;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartContextProvider({ children }: { children: ReactNode }) {
  const [numberOfCartItem, setnumberOfCartItem] = useState<number>(0);

  async function getUserCart() {
    try {
      const res = await getLoggedUserCart();
     
      if (res.status === "success") {
        let sum = 0;
        res.data.products.forEach((product: { count: number }) => {
          sum += product.count;
        });
      
        setnumberOfCartItem(sum);
      }
    } catch (err) {
     
    }
  }

  useEffect(() => {
    getUserCart();
   
  }, []);

  return (
    <CartContext.Provider value={{ numberOfCartItem, setnumberOfCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
