/**
 * File: races.js
 * Description:
 * This file contains routes for accessing Formula 1 race data.
 *
 * Endpoints:
 *  - GET /api/races: Fetch all races
 *  - GET /api/races/season/:year: Fetch all races for a specific season (year)
 *  - GET /api/races/id/:id: Fetch a race by its unique ID
 *
 * Author: Diego Gonzalez Reyes
 */
const express = require('express');
const router = express.Router();
const races = require('../data/races.json'); // Load races data from JSON file

/**
 * GET /api/races
 * Description: Fetch all races
 */
router.get('/', (req, res) => {
    res.json(races); // Send all races
});

/**
 * GET /api/races/season/:year
 * Description: Fetch all races for a specific season (year)
 */
router.get('/season/:year', (req, res) => {
    const { year } = req.params; // Extract the year from URL

    // Filter races by season year
    const seasonRaces = races.filter(r => r.year == year);

    if (seasonRaces.length > 0) {
        res.json(seasonRaces); // Return races for the season
    } else {
        res.status(404).json({ error: `No races found for season ${year}` }); // Return 404 error if no match
    }
});

/**
 * GET /api/races/id/:id
 * Description: Fetch a race by its unique ID
 */
router.get('/id/:id', (req, res) => {
    const { id } = req.params; // Extract the race ID from URL

    // Filter races by race ID
    const race = races.filter(r => r.id == id);

    if (race.length > 0) {
        res.json(race); // Return the race
    } else {
        res.status(404).json({ error: `Race with ID ${id} not found` }); // Return 404 error if no match
    }
});

/**
 * GET /api/races/seasoning/:year
 * Description: Fun route that returns a song response for the "seasoning" typo
 */
router.get('/seasoning/:year', (req, res) => {
    const { year } = req.params;

    // Custom song response for the "seasoning" typo
    res.json({Oops_did_You_mean: "season",
             If_you_are_looking_for_races_please_use: "/api/races/season/year"});
});

module.exports = router; // Export the router for use in index.js
