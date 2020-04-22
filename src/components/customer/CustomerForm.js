import React, { useContext, useRef } from "react";

import { CustomerContext } from "./CustomerProvider";
import "./Customer.css";

export default (props) => {
  const { addCustomer } = useContext(CustomerContext);
  const name = useRef();
  const address = useRef();

  const constructNewCustomer = () => {
    addCustomer({
      name: name.current.value,
      address: address.current.value,
    }).then(props.toggler);
  };

  return (
    <form className="customerForm">
      <h2 className="customerForm__title">New Customer</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerName">Customer name: </label>
          <input
            type="text"
            id="customerName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Customer name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerAddress">Address: </label>
          <input
            type="text"
            id="customerAddress"
            ref={address}
            required
            autoFocus
            className="form-control"
            placeholder="Street address"
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewCustomer();
        }}
        className="btn btn-primary"
      >
        Save Customer
      </button>
    </form>
  );
};
