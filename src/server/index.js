import express from 'express';
import cors from 'cors'
import pool from './db.js'

const app = express();
const port = 8000;


// middleware
app.use(cors())
app.use(express.json()) //req.body
app.disable('etag');



// Routes

// Add 1 car  - CREATE
// need to add rest of data, eg image, price etc

// app.post("/cars", async (req, res) => {
//     try {
//         const { description } = req.body;
//         const newCar = await pool.query(
//             "INSERT INTO cars (description) VALUES($1) RETURNING *",
//             [description]
//         );
//         res.json(newCar.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

//Get all cars - READ
app.get("/cars/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const car = await pool.query("SELECT * FROM cars WHERE id = $1", [id]);

        if (car.rowCount === 0) {
            const error = new Error(`No car with id of ${id} exists`);
            error.status = 404;
            return next(error);
        }
        res.json(car.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get(["/", "/cars"], async (req, res) => {
    try {
        const allCars = await pool.query("SELECT * FROM cars");
        res.json(allCars.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get 1 car - added for AR model route (testing)

// app.get("/cars/:id*", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const car = await pool.query("SELECT * FROM cars WHERE id = $1", [
//             id
//         ]);

//         res.json(car.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });



// Update 1 car - UPDATE 
// Need to extend to rest of data, eg make, price etc

// app.put("/cars/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { description } = req.body;
//         const updateCar = await pool.query(
//             "UPDATE cars SET description = $1 WHERE id = $2",
//             [description, id]
//         );

//         res.json("Car was updated!");
//     } catch (err) {
//         console.error(err.message);

//     }
// });

// Delete 1 car - DELETE

// app.delete("/cars/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteCar = await pool.query("DELETE FROM cars WHERE id = $1", [
//             id
//         ]);
//         res.json("Car was deleted!");
//     } catch (err) {
//         console.log(err.message);
//     }
// });

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, '0.0.0.0', () => {
    console.log(`AutoVista app listening on port ${port}`)
})

export default app;