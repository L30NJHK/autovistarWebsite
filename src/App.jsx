import { useState, useEffect } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';
import CarsPage from 'pages/CarsPage';
import SavedCarsPage from 'pages/SavedCarsPage';
import NotFoundPage from 'pages/NotFoundPage';
import CarDetailPage, { carLoader } from 'pages/CarDetailPage';
import AddCarPage from 'pages/AddCarPage';
import EditCarPage from 'pages/EditCarPage';
import ArModelPage from 'pages/ArModelPage';

// const apiUrl = 'http://localhost:8000';

// To enable mobile viewing from desktop
const apiUrl = 'http://192.168.1.50:8000';

const App = () => {
  // Get saved cars from local storage
  const storedItems = JSON.parse(localStorage.getItem('storedCars'));
  // set saved cars into storedCars state if there are any otherwise initialise array
  const [storedCars, setStoredCars] = useState(storedItems ? storedItems : []);
  const [cars, setCars] = useState();
  const [loading, setLoading] = useState(true);

  // Get cras from database
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // console.log('DATA from database>>>', data);
        setCars(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  // if storedCars variable is updated then also update local storage
  useEffect(() => {
    // Needs to be unique
    localStorage.setItem('storedCars', JSON.stringify(storedCars));
  }, [storedCars]);

  // Add New car
  const addCar = async (newcar) => {
    const res = await fetch(`${apiUrl}/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newcar),
    });
    return;
  };

  // Delete car
  const deleteCar = async (id) => {
    const res = await fetch(`${apiUrl}/cars/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update car
  const updateCar = async (car) => {
    const res = await fetch(`${apiUrl}/cars/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
    return;
  };

  // set up paths
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/cars"
          element={<CarsPage cars={cars} storedCars={storedCars} />}
        />
        {/* <Route path="/add-car" element={<AddCarPage addCarSubmit={addCar} />} /> */}
        {/* <Route
          path="/edit-car/:id"
          element={<EditCarPage updateCarSubmit={updateCar} />}
          loader={carLoader}
        /> */}
        <Route
          path="/cars/:id"
          element={
            <CarDetailPage
              storedCars={storedCars}
              setStoredCars={setStoredCars}
            />
          }
          loader={carLoader}
        />
        <Route
          path="/cars/:id/ar-model"
          element={<ArModelPage />}
          loader={carLoader}
        />
        <Route
          path="/saved"
          element={
            <SavedCarsPage
              cars={cars?.filter((car) => storedCars.includes(car.id))}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
