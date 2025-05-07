const request = require('supertest');

const carData1 = { "id": 1, "title": "Datsun Sunny", "type": "1200 nulldr", "location": "Thame ", "price": "19990", "company": ["Private Seller"], "description": "1973 Datsun 1200 Coupe - For Sale - I will only sell 'Scarlett' to someone suitable for its ownership. Car has been restro-modded with an eye to making this car stand out, handle well and very quick. I have owned the car for 12 years slowing building it taking time to make the right decisions despite of the cost.  Reason for sale is I have a Datsun 1200 Sedan as well and I only need one so I am keeping that and selling the Coupe to simplify my life. The car was cleaned, checked over all over then completely professionally sealed and Lanoguard sealed before it was fully sprayed red.The SR20det engine has been built with loads of Nismo and upgraded OEM parts - The SR20det and 5speed box are from a S15 Silvia. New Garrett 'Disco Potato' turbo, Nismo 550cc injectors, Nismo Oil & Water Pump. K&N filters, PWR Intercooler, 2.5'' Stainless Steel Exhaust, upgraded suspension, FD RX7 brakes etc etc.the list goes on.Link ECU tuned to 290hp with plenty more there (375hp if you want with gearbox limits) but it's only a 950kg RWD car - very quick car, handles like it is on rails and sounds absolutely incredible.New strip down and paint a couple years ago. Pioneer Stereo, speakers and powered subwoofers - tucked away to keep the lovely old look throughout. Feels incredibly responsive, sharp and tight so easy and enjoyable to drive but respect required especially on boost it has a connection and feel to the road cars no longer seem to have.  A very rare car with only the smallest handful of them in the UK - everywhere it goes it gets attention, compliments, photos/videos being taken and brings smiles to faces. This Datsun is incredibly unique and something really special so if you want a classic car that is a joy to drive with reliability turning heads everywhere it goes this is the car for you.", "make": "Datsun", "model": "Sunny", "fueltype": "Petrol", "registration_year": 1973, "mileage": 63000, "transmission": "Manual", "ar_name": "datsun-transformed.glb", "registration_number": "DS21 OPT", "images": ["1.png", "2.png", "3.png", "4.png"] }
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