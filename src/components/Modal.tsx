import React, { FC } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Item } from "../interfaces/ItemInterface";
import { itemsAtom } from "../recoil/atoms/itemsAtom";
import CartItems from "./CartItems";
import "./Modal.css";

const Modal: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = (props) => {
  const items: Item[] = useRecoilValue(itemsAtom);
  const clearCart = useResetRecoilState(itemsAtom);

  const total = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Shopping Cart</h2>
              <button className="modal-close" onClick={props.onClose}>
                &times;
              </button>
            </div>
            {items.length > 0 ? (
              <CartItems />
            ) : (
              <p>Your shopping cart is empty!</p>
            )}
            <div className="modal-footer">
              {items.length > 0 && (
                <button className="clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              )}
              <div className="total-wrapper">
                <span>Total:</span>
                <span>£{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
