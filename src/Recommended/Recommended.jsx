import React from "react";
import "./Recommended.css";
import Btn from "../Components/Btn";
const Recommended = ({ handelClick }) => {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Btn onClickHandler={handelClick} value="" titel="All Products" />
        <Btn onClickHandler={handelClick} value="Nike" titel="Nike" />
        <Btn onClickHandler={handelClick} value="Adidas" titel="Adidas" />
        <Btn onClickHandler={handelClick} value="Puma" titel="Puma" />
        <Btn onClickHandler={handelClick} value="Vans" titel="Vans" />
      </div>
    </>
  );
};

export default Recommended;
