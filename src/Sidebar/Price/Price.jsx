import React from "react";
import "./Price.css";
import Input from "../../Components/Input";
const Price = ({handelChange}) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title"><u>Price</u> </h2>


        <label className="sidebar-label-container">
        <input  onChange={handelChange} value="" type="radio" name="test2" />
        <span className="checkmark"></span>All
        </label>
        
        <Input
          handelChange={handelChange}
          value={50}
          title="$0-50"
          name="test2"
        />
        <Input
          handelChange={handelChange}
          value={100}
          title="$50-100"
          name="test2"
        />
        <Input
          handelChange={handelChange}
          value={150}
          title="$100-150"
          name="test2"
        />
        <Input
          handelChange={handelChange}
          value="200"
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
