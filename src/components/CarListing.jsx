import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import CarInfo from './CarInfo';
import './CarListing.css';

const CarListing = ({ car, favourite }) => {
  let description = car.description.substring(0, 180) + '...';

  const mainImage = car?.images[0];

  const imageSrc = `src/assets/images/${car.registration_number}/${mainImage}`;

  return (
    <Link to={`/cars/${car.id}`} target="_blank" rel="noopener noreferrer">
      <div className="carlisting-container">
        <div className="image-container">
          {/* {console.log('LISTING image location>>> ', imageSrc)} */}
          <img
            className="car-image"
            src={imageSrc}
            alt={`${car.title} image`}
          />
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
          <div className="favbutton-container">
            {favourite ? (
              <FaHeart className="heart" size={20} />
            ) : (
              <FaRegHeart className="heart" size={20} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CarListing;
