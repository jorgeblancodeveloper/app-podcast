import React from "react";
import { Separator } from "../../elements/Separator/Separator";
const PodcasterCard = ({ title, autor, description, image }) => {
  return (
    <div className="podcaster-card">
      <div className="podcaster-card__image">
        <img src={image} />
      </div>
      <Separator />
      <div className="podcaster-card__title">
        {title}

        <div className="podcaster-card__subtitle">by {autor}</div>
      </div>
      <Separator />
      <b>Description:</b>
      <div className="podcaster-card__description"> {description}</div>
    </div>
  );
};

export default PodcasterCard;
