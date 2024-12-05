
import React from "react";
import PropTypes from "prop-types";


export const Card = (props) => {
  return (
    <div className="card " >
      <img src={props.imageURL} className="card-img-top"  alt={props.imageAlt} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.email}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string
}

Card.defaultProps = {
  name: 'Jhon Doe',
  email: "jhon.doe@example.ocm",
  imageURL: 'https://randomuser.me/api/portraits/men/23.jpg',
  imageAlt: 'Photo Jhon Doe'
}
