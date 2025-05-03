import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import CarInfo from './CarInfo';
import './SavedCar.css';

const SavedCar = ({ car }) => {
  let description = car.description.substring(0, 180) + '...';

  const mainImage = car?.images[0];

  const imageSrc = `src/assets/images/${car.registration_number}/${mainImage}`;
  const asusIP = 'http://192.168.1.50:3000/cars/';
  const arPath = `${asusIP}${car.id}/ar-model`;

  return (
    <Link to={`/cars/${car.id}`} target="_blank" rel="noopener noreferrer">
      <div className="savedcar-container">
        <div className="images">
          <img
            className="car-image"
            src={imageSrc}
            alt={`${car.title} image`}
          />

          <div className="qr-container">
            <QRCodeSVG value={arPath} size={84} bgColor="rgb(73, 76, 70)" />
          </div>
        </div>
        <div className="car-text">
          <h3 className="car-title">
            {car.make} {car.model} ({car.registration_year})
          </h3>

          <div className="mb-5">{description}</div>
          <CarInfo car={car} />
          <div className="car-price">
            <p>£{Number(car.price).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SavedCar;
