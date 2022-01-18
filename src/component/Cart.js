import React from "react";

const Cart = ({ inCart, setInCart, product, sellPrice }) => {
  return (
    <div className="cart">
      <div className="cart__title">Cart</div>
      <div className="cart__items">
        {inCart === 0 ? (
          <p className="cart__empty-description">Your cart is empty.</p>
        ) : (
          <React.Fragment>
            <div className="cart__items__detail">
              <img
                className="cart__items__detail__img"
                src="images/image-product-1-thumbnail.jpg"
                alt="sneaker"
              />
              <div className="cart__items__detail__text">
                <p className="cart__items__detail__text__name">{product}</p>
                <p className="cart__items__detail__text__price">
                  {`${sellPrice.toFixed(2)} x ${inCart}    `}
                  <span className="cart__items__detail__text__total-price">
                    &ensp;{` $${(sellPrice * inCart).toFixed(2)}`}
                  </span>
                </p>
              </div>
              <button
                className="cart__items__detail__delete"
                onClick={() => setInCart(0)}
              >
                <img src="images/icon-delete.svg" alt="delete" />
              </button>
            </div>
            <button className="cart__items__checkout">Checkout</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Cart;
