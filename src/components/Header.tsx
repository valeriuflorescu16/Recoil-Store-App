import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaShoppingBasket } from "react-icons/fa";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { animateAtom } from "../recoil/atoms/animateAtom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animate, setAnimate] = useRecoilState(animateAtom);

  useEffect(() => {
    if (animate) {
      const timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 500); // remove animation class after 500ms
      return () => clearTimeout(timeoutId);
    }
  }, [animate]);

  return (
    <div className="header-container">
      <img src="logo.svg" className="logo" alt="logo" />
      <header className="header">Recoil Tech Store</header>
      <FaShoppingBasket
        className={`cart-icon ${animate ? "animate" : ""}`}
        onClick={() => setIsModalOpen(true)}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header;
