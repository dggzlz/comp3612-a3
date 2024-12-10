/**
 * File: driverResults.js
 * Description:
 * This file contains a route to fetch Formula 1 race results for a specific driver in a given year.
 *
 * Endpoint:
 *  - GET /api/driverResults/:driverRef/:year: Fetch results for a specific driver in a specific year
 *
 * Author: Diego Gonzalez Reyes
 */

const express = require('express');
const router = express.Router();

// Import race results data
const results = require('../data/results.json'); // Load results data from JSON file

/**
 * GET /api/driverResults/:driverRef/:year
 * Description: Fetch race results for a specific driver in a specific year.
 * Parameters:
 *  - driverRef (string): The driver's reference name (e.g., "max_verstappen").
 *  - year (number): The year of the race season (e.g., 2023).
 * Response:
 *  - 200: JSON object containing the filtered results for the specified driver and year.
 *  - 404: JSON error message if no results are found.
 */
router.get('/:driverRef/:year', (req, res) => {
    const { driverRef, year } = req.params; // Extract driver reference and year from URL parameters

    // Filter results for the given driver reference and year
    const filteredResults = results.filter(r => 
        r.driver.ref.toLocaleLowerCase() === driverRef.toLocaleLowerCase() && 
        r.race.year === parseInt(year)
    );

    if (filteredResults.length > 0) {
        res.json(filteredResults); // Return the filtered results if found
    } else {
        res.status(404).json({ error: `Results for driver '${driverRef}' in year ${year} not found` }); // Return 404 error if no match
    }
});

module.exports = router; // Export the router for use in index.js
