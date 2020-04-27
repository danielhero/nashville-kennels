import React from "react";

export default (props) => (
  <section className="animal">
    <div className="animal__breed">{props.animal.breed}</div>
    <div className="animal__customer">Owner Name: {props.customer.name}</div>
    <div className="animal__location">
      Currently boarded in {props.location.name}
    </div>
  </section>
);
