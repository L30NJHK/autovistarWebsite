import SavedCar from '../components/SavedCar';
import NotFoundPage from './NotFoundPage';
import './SavedCarsPage.css';

const SavedCarsPage = ({ cars }) => {
  const carsToDisplay = cars.map((displayCar) => (
    <SavedCar key={displayCar.id} car={displayCar} />
  ));

  return (
    <div className="savedcarspage-container">
      {cars.length === 0 ? (
        <NotFoundPage text1={'No Saved Cars'} text2={''} />
      ) : (
        carsToDisplay
      )}
    </div>
  );
};
export default SavedCarsPage;
