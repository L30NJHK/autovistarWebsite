# AutoVistAR Readme
## Install instructions:
- Git clone this repository 
- Use 'npm install' to install dependencies in a terminal

- Install PostgreSQL from [www.xxxxxx](https://www.postgresql.org/)
- Utilise an application of choice to create a database table named 'cars'. I used pgAdmin4 for this.
- You may need to create columns before being able to import the 'cars.csv' data into your database. These are as follows:
id (interger), title (character varying, length 100), type (character varying, length 100), location (character varying, length 100), price (character varying, length 100), company (character varying[], length 250), description (character varying, length 500), make (character varying, length 255), model (character varying, length 255), (character varying, length 255), mileage (interger), transmission (character varying, length 255), ar_name (character varying, length 255), images (character varying[], length 512)
- import the cars.csv file from the assets folder into your database

-  Replace ip address in code with your own  ip address. It's recommended to search for '192.' in the code.
This is needed instead of localhost in order to utilise the AR features via a mobile device with the webapp.

## How to run:
- 'npm run server' - to run the server. Endpoint can be viewed at localhost:8000/cars
- 'npm run dev' - to run the client. Can be viewed via IP or localhost 3000

# Miscellaneous
- 'npm run test' - to view test results
