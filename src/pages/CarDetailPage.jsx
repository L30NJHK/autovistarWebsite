import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import CarInfo from '../components/CarInfo';
import './CarDetailPage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarDetailPage = ({ storedCars, setStoredCars }) => {
  const [favourite, setFavourite] = useState();
  const car = useLoaderData();
  const imageList = car?.images;
  const imageDir = `../../src/assets/images/${car.registration_number}/`;

  // Set up ip addresses for mobile access
  const asusIP = 'http://192.168.1.50:3000/cars/';
  // const arPath = 'https://l30njhk.github.io/';
  const arPath = `${asusIP}${car.id}/ar-model`;

  useEffect(() => {
    setFavourite(storedCars.includes(car.id));
  }, [storedCars]);

  const carouselImages = imageList.map((image) => (
    <div className="cardetail-image-container" key={car.id}>
      <img
        className="car-image"
        src={`${imageDir}${image}`}
        alt={`${car.title} image`}
      />
    </div>
  ));

  const handleClick = () => {
    setFavourite(!favourite);
  };

  const manageFavourite = () => {
    favourite
      ? setStoredCars(storedCars.filter((fav) => fav !== car.id))
      : setStoredCars([...storedCars, car.id]);
  };

  return (
    <div className="cardetailpage-container">
      {/* Car Image */}
      <div className="carousel-container">
        <Carousel
          infiniteLoop
          className="image-carousel"
          useKeyboardArrows={true}
          centerMode
          swipeable={true}
        >
          {carouselImages}
        </Carousel>
      </div>

      {/* Car Description */}
      <div className="cardetail-text">
        <h1 className="cardetail-title">
          {car.title}
          <button
            onClick={() => {
              handleClick();
              manageFavourite();
            }}
            className="fav-button"
          >
            {favourite ? (
              <FaHeart className="heart" />
            ) : (
              <FaRegHeart className="heart" />
            )}
          </button>
        </h1>
        <CarInfo car={car} />
        <div className="car-description">
          <p>{car.description}</p>
        </div>
        {/* Car Price & QR Code */}
        <p className="cardetail-price">£{Number(car.price).toLocaleString()}</p>
        <div className="qr-code">
          <QRCodeSVG value={arPath} />
          <p className="qr-code-text">Scan QR Code to view car in 3D</p>
        </div>
      </div>
    </div>
  );
};

export const carLoader = async ({ params }) => {
  // const res = await fetch(`http://localhost:8000/cars/${params.id}`);
  const res = await fetch(`http://192.168.1.50:8000/cars/${params.id}`);

  const data = await res.json();
  return data;
};

// export { CarDetailPage as default, carLoader };
export default CarDetailPage;
