import React, { useEffect, useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import "./Infinite.css";

import Loader from "./Loader";

const Infinite_scroll = () => {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${(pages - 1) * 12}`
      );
      const data = await res.json();

      setProduct((prev) => [...prev, ...data.products]);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();

    console.log("Page:" + pages, product.length);
  }, [pages]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const screenHeight = window.innerHeight;

      if (scrollHeight - 5 <= scrollTop + screenHeight && !loading) {
        setPages((prev) => prev + 1);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="container">
    
      <h2 className="title">Product Infinite Scroll</h2>
      <div className="product_main">
        {product.map((prod, index) => (
          <div key={index} className="product_item">
            <div className="img_contain">
              <img src={prod.thumbnail} alt={prod.title} />
            </div>
            <div className="product_content">
              <h2>{prod.title}</h2>
              <p>₹ 200.00</p>
            </div>
          </div>
        ))}
       
        {loading && <Loader/> }
      </div>
    </div>
  );
};

export default Infinite_scroll;
