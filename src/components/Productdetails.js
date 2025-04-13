import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 


import "./Productdetails.css";
import Header from "./Header";

const Productdetails = () => {
  const [apiSpecificProductData, setApiSpecificProductData] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    getSpecificProduct();
  }, []);

  const getSpecificProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      if (response.ok) {
        setApiSpecificProductData(data);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const displaySpecificProduct = (product) => {
    if (!product) {
      return <p>Loading...</p>;
    }

    const {
      category,
      description,
      image,
      price,
      title,
    } = product;

    return (
      <div className="product-container">
        <div className="img-card">
          <img src={image} alt={title} className="images1" />
        </div>
        <div>
          <p>Rs {price}.00</p>
          <p>{title}</p>
          <p>Category: {category}</p>
          <p>{description}</p>
          <button type="button">Add to cart</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header/>
      {displaySpecificProduct(apiSpecificProductData)}
    </div>
  );
};

export default Productdetails;
