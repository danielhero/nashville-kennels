import React, { useContext } from "react";
import { CustomerContext } from "./CustomerProvider";
import Customer from "./Customer";
import "./Customer.css";

export default () => {
  const { customers } = useContext(CustomerContext);

  return (
    <>
      <h2>Customers</h2>
      <ul className="customers">
        {customers.map((cus) => (
          <Customer key={cus.id} customer={cus} />
        ))}
      </ul>
    </>
  );
};
