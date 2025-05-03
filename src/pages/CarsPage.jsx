import { useState } from 'react';
import CarListings from '../components/CarListings';
import {
  optionValues,
  radioValues,
  modelOptions,
  uniqueItems,
} from '../utils/utils';
import './CarsPage.css';
import '../components/Filters.css';

const CarsPage = ({ cars, storedCars }) => {
  const [displayCars, setDisplayCars] = useState(cars);
  const [manufacturer, setManufacturer] = useState();
  const [fromYear, setFromYear] = useState();
  const [toYear, setToYear] = useState();
  const [model, setModel] = useState('');
  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPrice] = useState();
  const [fromMileage, setFromMileage] = useState();
  const [toMileage, setToMileage] = useState();
  const handleChangeManufacturer = (e) => {
    setManufacturer(e.target.value);
  };
  const handleChangeModel = (event) => {
    setModel(event.target.value);
  };
  const handleChangeFromYear = (event) => {
    setValue(event.target.value);
  };
  const handleChangeToYear = (event) => {
    setValue(event.target.value);
  };
  const handleChangeFromPrice = (event) => {
    setValue(event.target.value);
  };
  const handleChangeToPrice = (event) => {
    setValue(event.target.value);
  };
  const handleChangeFromMileage = (event) => {
    setValue(event.target.value);
  };
  const handleChangeToMileage = (event) => {
    setValue(event.target.value);
  };
  const all = 'All';
  const models = modelOptions(cars, manufacturer);
  const fuelOptions = uniqueItems(cars, 'fueltype');
  const makeOptions = uniqueItems(cars, 'make');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayCars(
      cars.filter((car) =>
        (manufacturer === all) | (manufacturer === '')
          ? car
          : car.make == manufacturer
      )
    );
  };

  return (
    <div className="carspage-container">
      <div className="searchresults-div">
        <CarListings displayCars={displayCars} storedCars={storedCars} />
      </div>
      <div className="filters-div">
        <div className="filters-text">
          <h3 className="filter-title">Filters</h3>
          <form onSubmit={handleSubmit} className="filter-form">
            <select
              value={manufacturer}
              onChange={handleChangeManufacturer}
              className="manufacturer-select"
            >
              <option value={all} key={0}>
                All
              </option>
              {optionValues(makeOptions)}
            </select>
            <select
              value={model}
              onChange={handleChangeModel}
              className="model-select"
            >
              <option value={all} key={0}>
                All
              </option>
              {optionValues(models)}
            </select>
            <div className="filter-transmission">
              {radioValues(fuelOptions)}
            </div>
            <p className="filter-title">Year </p>
            <div className="filter-years">
              <select
                value={fromYear}
                onChange={handleChangeFromYear}
                className="manufacturer-select"
              >
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
              </select>
              <select
                value={toYear}
                onChange={handleChangeToYear}
                className="manufacturer-select"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
            <p className="filter-title">Price </p>
            <div className="filter-years">
              <select
                value={fromPrice}
                onChange={handleChangeFromPrice}
                className="manufacturer-select"
              >
                <option value="£1000">£1000</option>
                <option value="£2000">£2000</option>
                <option value="£3000">£3000</option>
                <option value="£4000">£4000</option>
                <option value="£5000">£5000</option>
              </select>
              <select
                value={toPrice}
                onChange={handleChangeToPrice}
                className="manufacturer-select"
              >
                <option value="£10000">£10000</option>
                <option value="£11000">£11000</option>
                <option value="£12000">£12000</option>
                <option value="£13000">£13000</option>
                <option value="£14000">£14000</option>
              </select>
            </div>
            <p className="filter-title">Mileage </p>
            <div className="filter-years">
              <select
                value={fromMileage}
                onChange={handleChangeFromMileage}
                className="manufacturer-select"
              >
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="3000">3000</option>
                <option value="4000">4000</option>
                <option value="5000">5000</option>
              </select>
              <select
                value={toMileage}
                onChange={handleChangeToMileage}
                className="manufacturer-select"
              >
                <option value="10000">10000</option>
                <option value="11000">11000</option>
                <option value="12000">12000</option>
                <option value="13000">13000</option>
                <option value="14000">14000</option>
              </select>
            </div>
            <div className="filter-transmission">
              {radioValues(['Manual', 'Automatic'], 'transmission')}
            </div>
            <div className="button-container">
              <button className="search-button" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CarsPage;
