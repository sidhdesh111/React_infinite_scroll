import React from "react";
import Product_Skeleton from "./Product_Skelton";

const Loader = () => {
  return (
    <div className="loading">
      <img className="loading_cricle" src="../public/loading-circles.webp" />
      <Product_Skeleton count={8} />
    </div>
  );
};

export default Loader;
