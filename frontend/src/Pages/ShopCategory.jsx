import React from "react";

const ShopCategory = (props) => {
  return (
    <div className="category">
      <div className="banner">
        <img src={props.categoryImage} style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
};

export default ShopCategory;
