/**
 * Project: COMP3612 Assignment 3 - Formula 1 API
 * File: index.js
 * Description:
 * This is the main entry point for the Formula 1 API built using Express.js. 
 * It provides endpoints to access various Formula 1 data, such as circuits, races, constructors, drivers, and results.
 *
 * Endpoints:
 *  - /api/circuits: Fetch all circuits
 *  - /api/races: Fetch all races or a specific race by ID
 *  - /api/constructors: Fetch all constructors
 *  - /api/drivers: Fetch all drivers
 *  - /api/results: Fetch results for a specific race or season
 *  - /api/constructorResults: Fetch results for a specific constructor and year
 *  - /api/driverResults: Fetch results for a specific driver and year
 *
 * Default Route:
 *  - /: Displays a welcome message for the API.
 *
 * Author: Diego Gonzalez Reyes
 */

const express = require('express'); // Import the Express.js framework
const app = express(); // Initialize the Express app
const PORT = process.env.PORT || 3000; // Set the server port (default: 3000)

// Middleware to parse JSON requests
app.use(express.json());

// Mount routes for various endpoints
app.use('/api/circuits', require('./routes/circuits')); // Routes for circuits
app.use('/api/races', require('./routes/races')); // Routes for races
app.use('/api/constructors', require('./routes/constructors')); // Routes for constructors
app.use('/api/drivers', require('./routes/drivers')); // Routes for drivers
app.use('/api/results', require('./routes/results')); // Routes for results (generic)
app.use('/api/constructorResults', require('./routes/results')); // Routes for constructor-specific results
app.use('/api/driverResults', require('./routes/driverResults')); // Routes for driver-specific results

// Default route to display a welcome message
// Default route: Welcome message
app.get('/', (req, res) => {
    res.send(message);
});


// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// welcome message for the developers using the API
const message = `
        <h1>Welcome to the COMP3612-A3 Formula 1 API</h1>
        <p>This API provides access to various Formula 1 data, including circuits, races, constructors, drivers, and results. Use the endpoints below to query the data.</p>
        
        <h2>Available Endpoints:</h2>
        <ul>
            <li><strong>Circuits:</strong>
                <ul>
                    <li><code>GET /api/circuits</code>: Fetch all circuits</li>
                    <li><code>GET /api/circuits/:id</code>: Fetch a circuit by its ID</li>
                </ul>
            </li>
            <li><strong>Races:</strong>
                <ul>
                    <li><code>GET /api/races</code>: Fetch all races</li>
                    <li><code>GET /api/races/season/:year</code>: Fetch all races for a specific season</li>
                    <li><code>GET /api/races/id/:id</code>: Fetch a race by its ID</li>
                </ul>
            </li>
            <li><strong>Constructors:</strong>
                <ul>
                    <li><code>GET /api/constructors</code>: Fetch all constructors</li>
                    <li><code>GET /api/constructors/:ref</code>: Fetch a constructor by its reference</li>
                </ul>
            </li>
            <li><strong>Drivers:</strong>
                <ul>
                    <li><code>GET /api/drivers</code>: Fetch all drivers</li>
                    <li><code>GET /api/drivers/:ref</code>: Fetch a driver by their reference</li>
                </ul>
            </li>
            <li><strong>Results:</strong>
                <ul>
                    <li><code>GET /api/results</code>: Fetch all race results</li>
                    <li><code>GET /api/results/:constructorRef/:year</code>: Fetch results for a constructor in a given year</li>
                    <li><code>GET /api/results/race/:id</code>: Fetch results for a specific race</li>
                    <li><code>GET /api/results/season/:year</code>: Fetch all results for a season</li>
                    <li><code>GET /api/results/driver/:driverRef/:year</code>: Fetch results for a driver in a given year</li>
                </ul>
            </li>
        </ul>
        <p>For more details, refer to the documentation or contact the developer.</p>
        <p><em>Developed by Diego Gonzalez Reyes for COMP3612 Assignment 3. Mount Royal University </em></p>
    `;
