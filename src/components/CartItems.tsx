import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartItem } from "../interfaces/ItemInterface";
import { itemsAtom } from "../recoil/atoms/itemsAtom";
import { cartItemsSelector } from "../recoil/selectors/cartItemsSelector";
import { AiFillDelete } from "react-icons/ai";

import "./CartItems.css";

const CartItems = () => {
  const cartItems: CartItem[] = useRecoilValue(cartItemsSelector);
  const setItems = useSetRecoilState(itemsAtom);

  const handleQuantityChange = (cartItem: CartItem, increment: number) => {
    setItems((prevItems) => {
      if (increment) {
        return [...prevItems, cartItem.item];
      } else {
        const index = prevItems.findIndex(
          (item) => item.id === cartItem.item.id
        );
        const items = [...prevItems];
        items.splice(index, 1);
        return items;
      }
    });
  };

  return (
    <div className="items-container">
      {cartItems.map((cartItem) => (
        <div className="item" key={cartItem.item.id}>
          <span>{cartItem.item.name}</span>
          <div className="quantity-controls">
            <button onClick={() => handleQuantityChange(cartItem, 0)}>-</button>
            <span>{cartItem.count}</span>
            <button onClick={() => handleQuantityChange(cartItem, 1)}>+</button>
          </div>
          <span>£{cartItem.item.price.toFixed(2)}</span>
          <AiFillDelete
            className="delete-button"
            onClick={() =>
              setItems((prevItems) =>
                prevItems.filter((item) => item.id !== cartItem.item.id)
              )
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CartItems;
