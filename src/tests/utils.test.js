import { modelOptions, uniqueItems } from '../utils/utils.jsx';

const carTestData =
    [
        { "make": "Datsun", "model": "Cherry", "fueltype": "Petrol" },
        { "make": "BMW", "model": "M5", "fueltype": "Petrol" },
        { "make": "BMW", "model": "i3", "fueltype": "Petrol" },
        { "make": "Honda", "model": "Civic", "fueltype": "Diesel" },
        { "make": "Honda", "model": "CR-Z", "fueltype": "Petrol" },
        { "make": "Volvo", "model": "S40", "fueltype": "Electric" }
    ]

describe('returns correct car models', () => {
    it('should return the ca models for a given manufacturer', async () => {
        const manufactuer = "Honda";
        const results = modelOptions(carTestData, manufactuer)
        expect(results).toEqual(['CR-Z', 'Civic'])
    }
    )
},

    describe('uniqueItems test', () => {
        it('should return unique fuel types ', async () => {

            const results = uniqueItems(carTestData, 'fueltype')
            expect(results).toEqual(['Petrol', 'Diesel', 'Electric'])
        }
        )
    }
    ))
