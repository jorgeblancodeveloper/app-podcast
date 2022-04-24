import React from "react";

const PodcasterThumb = ({ title, autor, image, ...props }) => {
  return (
    <div className="podcast-thumb" {...props}>
      <div className="podcast-thumb__image">
        <img src={image + "?" + Date.now()} loading ="lazy"/>
      </div>
      <div className="podcast-thumb__title">{title}</div>
      <div className="podcast-thumb__subtitle">Autor: {autor}</div>
    </div>
  );
};

export default PodcasterThumb;
