const request = require('supertest');

const carData1 = { "id": 1, "title": "Datsun", "type": "6.8 II 4dr", "location": "Northampton", "price": "19990", "company": ["Millstream Garage"], "description": "We are delighted to offer for sale this lovely Rolls Royce Silver Spur II. Originally a Cyprus car registered in 1990, we believe it was used in royal duties during Her Majesty The Queen's visit in October 1993. Coming to the UK in October 2002, it has only covered 33,783 miles. Resplendent in Dark Oyster with Beige Hide, it presents beautifully today and highlights the great care and attention it has received during its life..", "make": "Datsun", "model": "Cherry", "fueltype": "Diesel", "registration_year": 1999, "mileage": 100000, "transmission": "Manual", "ar_name": "datsun-transformed.glb", "registration_number": "DS21 OPT", "images": ["1.png", "2.png", "3.png", "4.png"] }
const totalNumberOfCars = 15;

describe('cars', () => {
  describe('get cars', () => {
    describe('correct car id given', () => {
      it('should return a 200', async () => {
        const carId = 5;
        const response = await request('http://localhost:8000')
          .get(`/cars/${carId}`)
        expect(response.status).toBe(200);
      });
      it('should return the correct data for the car', async () => {
        const carId = 1;
        const response = await request('http://localhost:8000')
          .get(`/cars/${carId}`)
        const carData = JSON.parse(response.text)
        expect(carData).toEqual(carData1)
      });
    });
    describe('incorrect car id given', () => {
      it('should return a 404', async () => {
        const carId = 999;
        const response = await request('http://localhost:8000')
          .get(`/cars/${carId}`)
        expect(response.status).toBe(404);
      });
    });
    describe('no id given - /cars endpoint', () => {
      it('should return all car data', async () => {
        const response = await request('http://localhost:8000')
          .get(`/cars`)
        const numOfCars = JSON.parse(response.text).length
        expect(numOfCars).toBe(totalNumberOfCars);
      });
    });
  });
});