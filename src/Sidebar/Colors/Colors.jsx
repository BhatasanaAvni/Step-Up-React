import React from "react";
import "./Colors.css";
import Input from "../../Components/Input";

const Colors = ({ handelChange }) => {
  return (
    <>
      <div className="colors-titel">
        <h2 className="sidebar-title "><u> Colors</u></h2>
        <label className="sidebar-label-container">
          <input onChange={handelChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>
      <Input
        handelChange={handelChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
        />

      <Input
        handelChange={handelChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
        />

      <Input
        handelChange={handelChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
        />

      <Input
        handelChange={handelChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
        />

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handelChange}
          value="white"
          name="test1"
          />
        <span
          className="checkmark"
          style={{
            backgroundColor: "white",
            border: "2px solid black",
            color: "black",
          }}
          ></span>
        White
      </label>
          </div>
    </>
  );
};

export default Colors;
