import "./App.scss";
import React from "react";
import article from "./resources/data/data.json";
import { Product } from "./Product/Product";

export const App = () => {
  return <Product data={article} />;
};
