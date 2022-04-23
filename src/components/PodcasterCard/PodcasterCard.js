import React from "react";

const PodcasterCard = ({ title, autor, description, image }) => {
  return (
    <div className="podcaster-card">
      <div className="podcaster-card__image"><img src={image} /></div>
      <hr className="podcaster-card__row"/>
      <div className="podcaster-card__title">
        {title}
       
        <div className="podcaster-card__subtitle">by {autor}</div>

 
      </div>
      <hr className="podcaster-card__row"/>
      <b>Description:</b>
           <div className="podcaster-card__description"> {description}</div>
    </div>
  );
};

export default PodcasterCard;
