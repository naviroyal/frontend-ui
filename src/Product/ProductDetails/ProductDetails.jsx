import React from "react";
import Package from "../../resources/icons/package.svg";
import StarFilled from "../../resources/icons/star-filled.svg";
import Star from "../../resources/icons/star.svg";
import Discount from "../../resources/icons/discount.svg";
import Add from "../../resources/icons/add.svg";
import "./styles.scss";
import { Typography, Button, Input } from "@mui/material";

export const ProductDetails = (props) => {
  const getStars = (starsCount) => {
    let ratings = [];
    for (let i = 1; i < starsCount; i++) {
      ratings.push(<img src={StarFilled} alt="star-filled" />);
    }

    for (let i = starsCount; i < 5; i++) {
      ratings.push(<img src={Star} alt="star" />);
    }
    return ratings;
  };

  return (
    <div className="product-details-container">
      <section className="product-details-container--img">
        <div className="product-details-container--other-img">
          <img src={Package} alt="package" className="other-img" />
          <img src={Package} alt="package" className="other-img" />
        </div>
        <div className="product-details-container--main-img">
          <img src={Package} alt="package" />
        </div>
      </section>
      <section className="product-details-container--detail">
        <div>
          <Typography variant="h5">{props.data.title}</Typography>
          <Typography>
            {`by `}
            <a href={`${props.data.supplier_link}`}>
              {props.data.supplier_name}
            </a>
          </Typography>
          <div className="star">{getStars(props.data.stars)}</div>
          <div>
            <Typography>
              <strong>{props.data.price} EUR</strong> +{" "}
              {props.data.transport_costs} EUR shipping{" "}
              <img src={Discount} alt="discount" className="discount" />
            </Typography>
            <Typography>
              all prices incl. {props.data.vat_percent}% taxes
            </Typography>
          </div>
        </div>
        <div className="items">
          <div className="items-cnt">
            <Input type="text" value={1} className="items-input" />
            PCE
          </div>
          <Button variant="contained" color="error" className="add-to-cart-btn">
            <img src={Add} alt="add" className="add-btn" />
            Add to cart
          </Button>
        </div>
      </section>
    </div>
  );
};
