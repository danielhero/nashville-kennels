import React, { useContext, useState } from "react";
import { CustomerContext } from "./CustomerProvider";
import Customer from "./Customer";
import "./Customer.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CustomerForm from "./CustomerForm";

export default () => {
  const { customers } = useContext(CustomerContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <h2>Customers</h2>

      <div className="fakeLink href" onClick={toggle}>
        New Customer
      </div>

      <ul className="customers">
        {customers.map((cus) => (
          <Customer key={cus.id} customer={cus} />
        ))}
      </ul>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Customer</ModalHeader>
        <ModalBody>
          <CustomerForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
