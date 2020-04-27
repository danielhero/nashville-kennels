import React, { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import Employee from "./Employee";
import { LocationContext } from "../location/LocationProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EmployeeForm from "./EmployeeForm";
import { EditEmployeeForm } from "./EditEmployeeForm";

export default () => {
  const { employees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);

  const [selectedEmployee, setEmployee] = useState({
    employee: { id: 0 },
    location: null,
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  return (
    <>
      <h2>Employees</h2>
      <Button onClick={toggle}>New Employee</Button>

      <ul className="employees">
        {employees.map((employee) => {
          const loc = locations.find((l) => l.id === employee.locationId);

          return (
            <div>
              <Employee key={employee.id} location={loc} employee={employee} />
              <Button
                onClick={() => {
                  toggleEdit();
                  setEmployee({ employee, loc });
                }}
              >
                Update Employee
              </Button>
            </div>
          );
        })}
      </ul>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Employee</ModalHeader>
        <ModalBody>
          <EmployeeForm toggler={toggle} />
        </ModalBody>
      </Modal>
      <Modal isOpen={editModal} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>
          {selectedEmployee.employee.name}
        </ModalHeader>
        <ModalBody>
          <EditEmployeeForm
            key={selectedEmployee.employee.id}
            toggleEdit={toggleEdit}
            {...selectedEmployee}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
