import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext([])

export function CartProvider(props) {
  const [items, setItems] = createStore([
    {title: 'test item', quantity: 2, price: 15, id: 100}
  ])

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}