import React from "react";
import Favorite from "../resources/icons/favorite.svg";
import Cart from "../resources/icons/cart.svg";
import FactsSoft from "../resources/icons/facts-soft.svg";
import "./styles.scss";

export const Header = (props) => {
  return (
    <div className="header-container">
      <p className="header-container--heading">{props.data.article.title}</p>
      <div className="header-container--icons">
        <div>
          <img
            src={Favorite}
            alt="favorite"
            className="header-container--icons--icon"
          />
          <img
            src={FactsSoft}
            alt="factsoft"
            className="header-container--icons--icon"
          />
        </div>
        <img
          src={Cart}
          alt="cart"
          className="header-container--icons--icon cart"
        />
      </div>
    </div>
  );
};
