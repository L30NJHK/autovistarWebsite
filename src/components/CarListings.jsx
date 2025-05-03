import CarListing from './CarListing';
import './CarListings.css';

const CarListings = ({ displayCars, storedCars }) => {
  const carsToDisplay = displayCars.map((displayCar) => (
    <CarListing
      key={displayCar.id}
      car={displayCar}
      favourite={storedCars.includes(displayCar.id)}
    />
  ));

  return (
    <section className="carlistings-container">
      <div className="searchresults-div">
        {displayCars ? carsToDisplay : null}
      </div>
    </section>
  );
};
export default CarListings;
