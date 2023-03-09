import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { Item } from "../interfaces/ItemInterface";
import { itemsAtom } from "../recoil/atoms/itemsAtom";
import CartItems from "./CartItems";
import "./Modal.css";

const Modal: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = (props) => {
  const items: Item[] = useRecoilValue(itemsAtom);

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
            <CartItems />
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
