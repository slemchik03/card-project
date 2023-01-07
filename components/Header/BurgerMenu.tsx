"use client";

import { useEffect, useState } from "react";
import BurgerMenuContent from "./BurgerMenuContent";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");

    return () => {
      isOpen && (document.body.style.overflowY = "visible");
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className={`burger z-[101] ${isOpen ? "active" : ""}`}
        role="button"
      >
        <span className="stick"></span>
        <span className="stick"></span>
        <span className="stick"></span>
        <span className="stick"></span>
        <span className="stick"></span>
      </div>
      <BurgerMenuContent
        isOpen={isOpen}
        closeBurgerHandler={() => setIsOpen(false)}
      />
    </>
  );
};

export default BurgerMenu;
