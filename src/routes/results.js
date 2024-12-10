/**
 * File: results.js
 * Description:
 * This file contains routes for accessing Formula 1 race results data.
 *
 * Endpoints:
 *  - GET /api/results: Fetch all results
 *  - GET /api/results/:constructorRef/:year: Fetch results for a specific constructor in a given year
 *  - GET /api/results/race/:id: Fetch results for a specific race by ID
 *  - GET /api/results/season/:year: Fetch all results for a specific season (year)
 *
 * Author: Diego Gonzalez Reyes
 */

const express = require('express');
const router = express.Router();
const results = require('../data/results.json'); // Load results data from JSON file

/**
 * GET /api/results
 * Description: Fetch all race results
 */
router.get('/', (req, res) => {
    res.json(results); // Send all results
});

/**
 * GET /api/results/:constructorRef/:year
 * Description: Fetch results for a specific constructor in a given year
 */
router.get('/:constructorRef/:year', (req, res) => {
    const { constructorRef, year } = req.params; // Extract constructor reference and year from URL

    // Filter results based on constructor reference and year
    const filteredResults = results.filter(r => 
        r.constructor.ref.toLocaleLowerCase() === constructorRef.toLocaleLowerCase() && 
        r.race.year === parseInt(year)
    );
    console.log("result", filteredResults);
    if (filteredResults.length > 0) {
        res.json(filteredResults); // Return the filtered results
    } else {
        res.status(404).json({ error: `Results for constructor '${constructorRef}' in year ${year} not found` }); // Return 404 error if no match
    }
});

/**
 * GET /api/results/race/:id
 * Description: Fetch results for a specific race by its unique ID
 */
router.get('/race/:id', (req, res) => {
    const { id } = req.params; // Extract race ID from URL

    // Filter results based on race ID
    const raceResults = results.filter(r => r.race.id == id);

    if (raceResults.length > 0) {
        res.json(raceResults); // Return the race results
    } else {
        res.status(404).json({ error: `Results for race ID ${id} not found` }); // Return 404 error if no match
    }
});

/**
 * GET /api/results/season/:year
 * Description: Fetch all results for a specific season (year)
 */
router.get('/season/:year', (req, res) => {
    const { year } = req.params; // Extract season year from URL

    // Filter results based on season year
    const seasonResults = results.filter(r => r.race.year == year);

    if (seasonResults.length > 0) {
        res.json(seasonResults); // Return all results for the season
    } else {
        res.status(404).json({ error: `Results for season ${year} not found` }); // Return 404 error if no match
    }
});

module.exports = router; // Export the router for use in index.js
