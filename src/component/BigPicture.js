import React, { useState } from "react";
import PreviewThumbnail from "./PreviewThumbnail";

const BigPicture = ({ setOpenBigPicture }) => {
  const thumbnails = [1, 2, 3, 4];
  const [selected, setSelected] = useState(1);
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
    <div className="overlay">
      <div className="big-picture ">
        <button
          className="big-picture__close"
          onClick={() => setOpenBigPicture(false)}
        >
          <svg
            className="icon-close"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="big-picture__slider big-picture__previous"
          onClick={onPreviousHandler}
        >
          <img src="images/icon-previous.svg" alt="previous" />
        </button>
        <button
          className="big-picture__slider big-picture__next"
          onClick={onNextHandler}
        >
          <img src="images/icon-next.svg" alt="next" />
        </button>
        <img
          className="big-picture__image"
          src={`images/image-product-${selected}.jpg`}
        />
        <div className="thumbnail">{renderedThumbnails}</div>
      </div>
    </div>
  );
};

export default BigPicture;
