import React, { useState } from "react";

const ProductDescription = ({
  company,
  product,
  description,
  sellPrice,
  discount,
  originalPrice,
  addToCart,
}) => {
  const [count, setCount] = useState(0);
  const onPlusHandler = () => {
    setCount(count + 1);
  };
  const onMinusHandler = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const onAddToCart = () => {
    if (count === 0) return;
    addToCart((prevState) => {
      return prevState + count;
    });
  };

  return (
    <div className="product-description">
      <p className="company">{company}</p>
      <h1 className="product-name">{product}</h1>
      <p className="description">{description}</p>
      <div className="price">
        <div className="price__sell">
          <p className="price__sell__now">{`$${sellPrice.toFixed(2)}`}</p>
          <p className="price__sell__discout">{`${discount}%`}</p>
        </div>
        <p className="price__original">{`$${originalPrice.toFixed(2)}`}</p>
      </div>
      <div className="shopping-options">
        <div className="shopping-options__counts">
          <button
            className="shopping-options__counts__minus"
            onClick={onMinusHandler}
          >
            <img src="images/icon-minus.svg" alt="minus" />
          </button>
          <p className="shopping-options__counts__count">{count}</p>
          <button
            className="shopping-options__counts__plus"
            onClick={onPlusHandler}
          >
            <img src="images/icon-plus.svg" alt="plus" />
          </button>
        </div>
        <button className="shopping-options__add-to-cart" onClick={onAddToCart}>
          <img src="images/icon-cart-white.svg" alt="cart" />
          <p className="shopping-options__add-to-cart__text">Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
