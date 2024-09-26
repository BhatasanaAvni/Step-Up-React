import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
// import { HiNewspaper } from "react-icons/hi";

const Sidebar = ({ handelChange }) => {
  console.log(handelChange);
  return (
    <>
      <div className="sidebar">
        <div className="logo-container">
          <h1>
            <a href="#" style={{ color: " black" }}>
              Step<span>Up</span>
            </a>
          </h1>
        </div>
        <Category handelChange={handelChange} />
        <Price handelChange={handelChange} />
        <Colors handelChange={handelChange} />
      </div>
    </>
  );
};

export default Sidebar;
