export const modelOptions = (cars, manufacturer) =>
  cars
    .filter((carObject) => carObject.make == manufacturer)
    .map((filteredCars) => filteredCars.model)
    .sort();

export const radioValues = (criteria, name) =>
  criteria.map((criterion, index) => (
    <label key={index}>
      <input
        type="radio"
        name={name}
        value={criterion}
        className="filter-radio"
        defaultCheckedn
      ></input>
      {criterion}
    </label>
  ));

export const optionValues = (criteria) =>
  criteria.map((criterion, index) => (
    <option value={criterion} key={index}>
      {criterion}
    </option>
  ));

export const uniqueItems = (cars, itemType) => [
  ...new Set(cars.map((carObject) => carObject[itemType])),
];
