import React, { useContext, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Animal from "./Animal";
import "./Animal.css";
import AnimalForm from "./AnimalForm";

export default () => {
  const { animals } = useContext(AnimalContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomerContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <h2>Animals</h2>
      <Button
        onClick={() => {
          const userId = localStorage.getItem("kennel_customer");
          if (userId) {
            toggle();
          }
        }}
      >
        Make Appointment
      </Button>

      <ul className="animals">
        {animals.map((ani) => {
          const matchingLocation = locations.find(
            (loc) => loc.id === ani.locationId
          );
          const matchingCustomer = customers.find(
            (customer) => customer.id === ani.customerId
          );

          return (
            <Animal
              key={ani.id}
              animal={ani}
              customer={matchingCustomer}
              location={matchingLocation}
            />
          );
        })}
      </ul>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Admit a Pet</ModalHeader>
        <ModalBody>
          <AnimalForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
