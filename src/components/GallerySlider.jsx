import React from 'react';
import './GallerySlider.css';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

// implement own display

const GallerySlider = ({ cars }) => {
  // console.log('cars here in gallery slider', cars);
  // const imageList = car?.images;
  // const imageDir = `../../src/assets/images/${car.registration_number}/`;
  const carouselImages = cars.map((car) => (
    <div className="image-container">
      <img
        className="car-image"
        src={`../../src/assets/images/${car.registration_number}/${car.images[0]}`}
        alt={`${car.title} image`}
      />
    </div>
  ));

  // const imageSrc = '/src/assets/images/rr6.jpg';
  return (
    <div className="homepage-slider">
      <Carousel
        // infiniteLoop
        className="image-carousel"
        slidesToShow={10}
        itemsToShow={3}
        useKeyboardArrows={true}
      >
        {carouselImages}
      </Carousel>
    </div>
  );
};

export default GallerySlider;
