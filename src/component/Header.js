import React, { useState } from "react";
import Cart from "./Cart";

const Header = ({ inCart, setInCart, product, sellPrice }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const onShowCart = () => {
    setShowCart((prevState) => {
      return !prevState;
    });
  };

  const onShowMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className={`mobile-overlay ${showMenu ? "show" : ""}`}></div>
      <button className="mobile-menu" onClick={onShowMobileMenu}>
        <img className="menu-icon" src="images/icon-menu.svg" alt="menu" />
      </button>
      <img className="logo" src="images/logo.svg" alt="logo" />
      <nav className={`nav ${showMenu && "show"}`}>
        <button className="close-menu" onClick={onShowMobileMenu}>
          <img className="close-icon" src="images/icon-close.svg" alt="close" />
        </button>
        <ul className="nav-list">
          <li>
            <a className="nav-list__item" href="#">
              Collections
            </a>
          </li>
          <li>
            <a className="nav-list__item" href="#">
              Men
            </a>
          </li>
          <li>
            <a className="nav-list__item" href="#">
              Women
            </a>
          </li>
          <li>
            <a className="nav-list__item" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-list__item" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="user">
        <button onClick={onShowCart} className="user__cart">
          <svg
            className="icon icon__cart"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          {inCart > 0 && (
            <div className="user__cart__item">
              <p>{inCart}</p>
            </div>
          )}
        </button>
        <img className="user__image" src="images/image-avatar.png" />
        {showCart && (
          <Cart
            inCart={inCart}
            setInCart={setInCart}
            product={product}
            sellPrice={sellPrice}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
