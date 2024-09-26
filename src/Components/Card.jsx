import React from "react";
import { BsBagHeartFill } from "react-icons/bs";
const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
}) => {
  return (
    <>
      <div className="card">
        <img src={img} className="card-img" alt={title} />
        <div className="card-details">
          <h3 className="card-titel">{title}</h3>
          <div className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <span className="total-reviews">{reviews}</span>
          </div>
          <div className="card-price">
            <div className="price">
              <del>{prevPrice}</del>
              <span>{newPrice}</span>
            </div>
            <BsBagHeartFill className="bag-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
