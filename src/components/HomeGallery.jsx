import React from 'react';
import { Link } from 'react-router-dom';
import './HomeGallery.css';

const HomeGallery = ({ cars }) => {
  const carouselImages = cars.slice(0, 7).map((car) => (
    <div className="homegallery-image" key={car.id}>
      <Link to={`/cars/${car.id}`} target="_blank" rel="noopener noreferrer">
        <img
          className="homegallery-car-image"
          src={`../../src/assets/images/${car.registration_number}/${car.images[0]}`}
          alt={`${car.title} image`}
        />
      </Link>
    </div>
  ));

  return <div className="homegallery-container">{carouselImages}</div>;
};

export default HomeGallery;
