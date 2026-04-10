import React from "react";
import data_product from "../../assets/data";
import Item from "../Items/Item";
import "./Popular.css";

const Popular = () => {
  return (
    <>
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
          {data_product.map((data, i) => (
            <Item
              key={i}
              name={data.name}
              image={data.image}
              new_price={data.new_price}
              old_price={data.old_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
