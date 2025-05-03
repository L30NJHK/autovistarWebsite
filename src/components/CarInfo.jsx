import { FaMapMarker } from 'react-icons/fa';
import './CarInfo.css';

const CarInfo = ({ car }) => {
  return (
    <div className="car-info">
      <div>
        <p className="car-heading">Transmission</p>
        <p> {car.transmission}</p>
      </div>
      <div>
        <p className="car-heading">Fuel Type</p>
        <p>{car.fueltype}</p>
      </div>
      <div>
        <p className="car-heading">Mileage</p>
        <p>{car.mileage}</p>
      </div>
      <div>
        <p className="car-heading">Location</p>
        <p>
          <FaMapMarker className="location-marker" />
          {car.location}
        </p>
      </div>
    </div>
  );
};
export default CarInfo;
