import React from "react";
import "./Category.css";
import Input from "../../Components/Input";
const Category = ({ handelChange }) => {
  return (
    <>
      <h2 className="sidebar-title"><u> Category</u></h2>
      <div>
        <label className="sidebar-label-container">
        <input type="radio" onChange={handelChange} value="" name="test" />
        <span className="checkmark"></span>All
        </label>
        <Input
          handelChange={handelChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handelChange={handelChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handelChange={handelChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handelChange={handelChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </>
  );
};

export default Category;
