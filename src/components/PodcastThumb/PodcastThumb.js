import React from "react";

const PodcasterThumb = ({ title, autor, image }) => {
  return (
    <div className="podcast-thumb">
      <div className="podcast-thumb__image">
        <img src={image} />
      </div>
      <div className="podcast-thumb__title">
        {title}

      </div>
      <div className="podcast-thumb__subtitle">Autor: {autor}</div>
    </div>
  );
};

export default PodcasterThumb;
