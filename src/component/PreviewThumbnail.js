import React, { useState } from "react";

const PreviewThumbnail = (props) => {
  const onSelect = () => {
    props.setPreview(props.id);
  };

  return (
    <img
      className={
        props.id === props.selected
          ? "thumbnail__image thumbnail__image__selected"
          : "thumbnail__image"
      }
      src={`images/image-product-${props.id}.jpg`}
      onClick={onSelect}
    />
  );
};

export default PreviewThumbnail;
