import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import "./Allproducts.css";
import Header from "./Header";

const Allproducts = () => {
  const [Apidata, setApidata] = useState([]);
  const [Catagory, setCatagory] = useState('');

  useEffect(() => {
    getAllproductDetails();
  }, []);

  const getAllproductDetails = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      if (response.ok) {
        setApidata(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  const displayproducts = (eachproduct) => {
    const { id, category, image, price, title } = eachproduct;

    return (
      <li className="list-items" key={id}>
       
        <Link to={`/products/${id}`} className="link-style">
          <div className="product-container">
            <div>
              <img src={image} alt={title} className="images" />
            </div>
            <div>
              <p>Rs {price}.00</p>
              <p>{title}</p>
              <p>Category: {category}</p>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </Link>
      </li>
    );
  };

  return (
    <div>
      <Header/>
    
      <ul className="list-items-container">
        {Apidata.map((eachproduct) => displayproducts(eachproduct))}
      </ul>
    </div>
  );
};

export default Allproducts;
