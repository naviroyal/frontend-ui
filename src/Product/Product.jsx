import React from "react";
import { Header } from "../Header/Header";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { ProductDetailedDescription } from "./ProductDetailedDescription/ProductDetailedDescription";

export const Product = (props) => {
  return (
    <div>
      <Header data={props.data} />
      <ProductDetails data={props.data.article} />
      <ProductDetailedDescription data={props.data.article} />
    </div>
  );
};
