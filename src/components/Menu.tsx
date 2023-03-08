import React, { FC } from "react";
import { Item } from "../interfaces/ItemInterface";
import { cartItemsAtom } from "../recoil/atoms/cartItemsAtom";
import { useSetRecoilState } from "recoil";

import "./Menu.css";
import { animateAtom } from "../recoil/atoms/animateAtom";

const Menu: FC<{
  items: Item[];
}> = (props) => {
  const setCartItems = useSetRecoilState(cartItemsAtom);
  const setAnimate = useSetRecoilState(animateAtom);

  const handleAddToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="card">
      <ul className="item-list">
        {props.items.map((item) => (
          <li key={item.id} className="item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">£{item.price.toFixed(2)}</span>
            <button
              className="add-button"
              onClick={() => {
                setAnimate(true);
                handleAddToCart(item);
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
