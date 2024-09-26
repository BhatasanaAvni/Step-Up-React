import React from "react";

const Btn = ({ onClickHandler, value, titel }) => {
  return (
    <div>
      <button onClick={onClickHandler} value={value} className="btns">
        {titel}
      </button>
    </div>
  );
};

export default Btn;
