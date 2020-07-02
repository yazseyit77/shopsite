import React from "react";
import Stock from "./stock";

const Inventory = () => {
  const database = [
    {
      name: "red tshirt",
      price: 10.99,
      id: 1,
    },
    {
      name: "black hoodie",
      price: 22.99,
      id: 2,
    },
    {
      name: "green hat",
      price: 5.99,
      id: 3,
    },
  ];
  return (
    <div>
      {database.map((item) => (
        <Stock name={item.name} price={item.price} key={item.id} />
      ))}
    </div>
  );
};

export default Inventory;
