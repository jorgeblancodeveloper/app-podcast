import React from "react";
import { Separator } from "../../elements";
import { Link } from "react-router-dom";
const PodcasterCard = ({
  title,
  autor,
  description,
  image,
  id,
  setImageLoaded,
}) => {
  return (
    <div className="podcaster-card">
      <div className="podcaster-card__wrapper">
        <Link to={`/podcast/${id}`}>
          <div className="podcaster-card__image">
            <img src={image} onLoad={setImageLoaded} />
          </div>
          <Separator />
          <div className="podcaster-card__title">
            {title}
            <div className="podcaster-card__subtitle">by {autor}</div>
          </div>
        </Link>
        <Separator />
        <div className="podcaster-card__description">
          <b>Description:</b>
          {description}
        </div>
      </div>
    </div>
  );
};

export default PodcasterCard;
