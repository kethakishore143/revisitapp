import React, {useContext, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { MdSpeakerNotes } from "react-icons/md";
import { VscBellDot } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import { store } from "../App";

import "./Header.css";

const Header = () => {
  const [token] = useContext(store);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/myprofile', {
      headers: {
        'x-token': token,
      }
    }).then(res => setData(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <nav className="nav-container">
      <div className="cartimg-container">
        <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1744541335/z4bczzbzw4vb6g1oibzv.jpg' alt="cart" className="cart-img" />
        <h1 className="fastcart">fastcart</h1>
        <IoSearchOutline  className='searchicon'/>
        <p>Search...</p>
      </div>

      <ul className="nav-items">
      <div className='profilename'>
          <MdSpeakerNotes />
          <VscBellDot />
        <li>{data ? data.username[0] : "G"}</li>
          
          <li>{data ? data.username : "Guest"}</li>
          </div>

        <li>
          <IoIosArrowDown />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
