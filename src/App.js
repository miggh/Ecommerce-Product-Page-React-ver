import React, { useState } from "react";
import "./css/style.css";
import Header from "./component/Header";
import ProductPreview from "./component/ProductPreview";
import ProductDescription from "./component/ProductDescription";

const data = {
  company: "Sneaker Company",
  product: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand every the weather can offer.",
  sellPrice: 125,
  discount: 50,
  originalPrice: 250,
};

const App = () => {
  const [inCart, setInCart] = useState(0);

  return (
    <React.Fragment>
      <Header
        inCart={inCart}
        setInCart={setInCart}
        product={data.product}
        sellPrice={data.sellPrice}
      />
      <main className="main">
        <ProductPreview />
        <ProductDescription
          company={data.company}
          product={data.product}
          description={data.description}
          sellPrice={data.sellPrice}
          discount={data.discount}
          originalPrice={data.originalPrice}
          addToCart={setInCart}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
