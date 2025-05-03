import Hero from 'components/Hero';
import { useState, useEffect } from 'react';
import HomeGallery from '../components/HomeGallery';
import './Homepage.css';

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const carsApiUrl = 'http://192.168.1.50:8000';
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(carsApiUrl);
        const data = await res.json();

        setCars(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);
  return (
    <>
      <div className="homepage-container">
        <Hero />
        <HomeGallery cars={cars} />
      </div>
    </>
  );
};
export default HomePage;
