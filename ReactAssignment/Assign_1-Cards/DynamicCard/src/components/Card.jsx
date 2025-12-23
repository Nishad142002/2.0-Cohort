import React from "react";

import "./card.css";
import { productImg } from "../assets/assets";

const Card = ({ props }) => {
  console.log(props);

  return (
    <div className="card">
      <div className="imgBox">
        <img src={props.img} alt="" />
      </div>
      <div className="content">
        <span className="price">
          <h2>${props.price}</h2>
        </span>

        <div className="info">
          <div>
            <h1>{props.name}</h1>
            <h3>{props.company}</h3>
            <p>{props.description}</p>
          </div>

          <div className="btn">
            <button>Add to Cart</button>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
