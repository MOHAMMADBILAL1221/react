import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartitems, setcartitems] = useState([]);
  const arr = cartitems;

  function additemcart(item) {
    const itemIndex = cartitems.findIndex((data) => data.id == item.id);
    if (itemIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setcartitems([...arr])
  }

  function removeItemFromCart() {
    const arr = cartitems;
    const itemIndex = cartitems.findIndex((data) => data.id == item.id);

    arr.splice(itemIndex, 1);
    setcartitems([...arr]);
  }
  function isItemAdded(id) {
    const arr = cartitems;
    const itemIndex = cartitems.findIndex((data) => data.id == item.id);

    if (itemIndex == -1) {
        return null;
    }else{
        return arr[itemIndex]
    }
  }

  return <CartContext.Provider
  value={{cartitems , additemcart ,removeItemFromCart ,isItemAdded}}
  >{children}</CartContext.Provider>;
}

export default CartContextProvider;
