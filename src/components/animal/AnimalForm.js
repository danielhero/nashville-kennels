import React, { useContext, useRef } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import "./Animal.css";

export default (props) => {
  const { addAnimal } = useContext(AnimalContext);
  const { locations } = useContext(LocationContext);
  const name = useRef();
  const location = useRef();
  const breed = useRef();

  const constructNewAnimal = () => {
    const locationId = parseInt(location.current.value);
    const userId = parseInt(localStorage.getItem("kennel_customer"));

    addAnimal({
      name: name.current.value,
      locationId: locationId,
      breed: breed.current.value,
      customerId: userId,
    }).then(props.toggler);
  };

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Pet</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Pet name: </label>
          <input
            type="text"
            id="animalName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Animal name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalBreed">Breed: </label>
          <input
            type="text"
            id="animalBreed"
            ref={breed}
            required
            autoFocus
            className="form-control"
            placeholder="Breed"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Kennel Location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="animalLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewAnimal();
        }}
        className="btn btn-primary"
      >
        Make Appointment
      </button>
    </form>
  );
};
