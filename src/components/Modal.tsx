import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { CartItem, Item } from "../interfaces/ItemInterface";
import { cartItemsAtom } from "../recoil/atoms/cartItemsAtom";
import { cartItemsSelector } from "../recoil/selectors/cartItemsSelector";
import "./Modal.css";

const Modal: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = (props) => {
  const cartItems: CartItem[] = useRecoilValue(cartItemsSelector);
  const items: Item[] = useRecoilValue(cartItemsAtom);

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
            <div className="modal-body">
              {cartItems.map((cartItem) => (
                <div className="modal-item" key={cartItem.item.id}>
                  <span>{cartItem.item.name}</span>
                  <span>{cartItem.count}</span>
                  <span>${cartItem.item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <span>Total:</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
