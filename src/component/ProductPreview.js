import React, { useState } from "react";
import PreviewThumbnail from "./PreviewThumbnail";
import BigPicture from "./BigPicture";

const ProductPreview = () => {
  const thumbnails = [1, 2, 3, 4];

  const [selected, setSelected] = useState(1);
  const [openBigPicture, setOpenBigPicture] = useState(false);

  const setPreview = (id) => {
    setSelected(id);
  };

  const onPreviousHandler = () => {
    if (selected === 1) return;
    setSelected(selected - 1);
  };

  const onNextHandler = () => {
    if (selected === 4) return;
    setSelected(selected + 1);
  };

  const renderedThumbnails = thumbnails.map((id) => {
    return (
      <PreviewThumbnail
        key={id}
        id={id}
        setPreview={setPreview}
        selected={selected}
      />
    );
  });

  return (
    <div className="preview">
      {openBigPicture && <BigPicture setOpenBigPicture={setOpenBigPicture} />}
      <button
        className="preview__slider preview__previous"
        onClick={onPreviousHandler}
      >
        <img src="images/icon-previous.svg" alt="previous" />
      </button>
      <button className="preview__slider preview__next" onClick={onNextHandler}>
        <img src="images/icon-next.svg" alt="next" />
      </button>
      <img
        className="preview__image"
        src={`images/image-product-${selected}.jpg`}
        onClick={() => setOpenBigPicture(true)}
      />
      <div className="thumbnail">{renderedThumbnails}</div>
    </div>
  );
};

export default ProductPreview;
