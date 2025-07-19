import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Product_Skeleton.css";

const Product_Skeleton = ({ count }) => {
  return (
    <>
      <div className="product_main">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="product_item">
            <div className="img_contain">
              <Skeleton
                height={180}
                width={180}
                baseColor="#4a4a4a"
                highlightColor="#6e6e6e"
                borderRadius={8}
              />
            </div>
            <div className="product_content">
              <h2>
                <Skeleton
                  height={24}
                  width={140}
                  baseColor="#4a4a4a"
                  highlightColor="#6e6e6e"
                />
              </h2>
              <p>
                <Skeleton
                  height={18}
                  width={80}
                  baseColor="#4a4a4a"
                  highlightColor="#6e6e6e"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product_Skeleton;
