import React from "react";
import { Separator } from "../../elements/Separator/Separator";
import { Link } from "react-router-dom";
const PodcasterCard = ({ title, autor, description, image, id }) => {
  return (
    <div className="podcaster-card">
      <Link to={`/podcast/${id}`}>
      <div className="podcaster-card__image">
        <img src={image} />
      </div>
      <Separator />
      <div className="podcaster-card__title">
        {title}

        <div className="podcaster-card__subtitle">by {autor}</div>
      </div>
      </Link>
      <Separator />
      <div className="podcaster-card__description">  <b>Description:</b><br/>{description}</div>
    </div>
  );
};

export default PodcasterCard;
