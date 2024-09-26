// icons
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";

import React from "react";
import "./Nav.css";
const Nav = ({handleinputChange,query}) => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input
            type="text"
            onChange={handleinputChange}
            value={query}
            className="search-input"
            placeholder="Enter Your Search Shoes..."
          />
        </div>
        <div className="profile-container">
          <a href="#">
            <CiHeart className="nav-icons" />
          </a>
          <a href="#">
            <MdOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="nav-icons"/>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
