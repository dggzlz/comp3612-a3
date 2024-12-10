/**
 * File: drivers.js
 * Description:
 * This file contains routes for accessing Formula 1 driver data.
 *
 * Endpoints:
 *  - GET /api/drivers: Fetch all drivers
 *  - GET /api/drivers/:ref: Fetch a driver by their reference
 *
 * Author: Diego Gonzalez Reyes
 */
const express = require('express');
const router = express.Router();
const drivers = require('../data/drivers.json'); // Load drivers data from JSON file

/**
 * GET /api/drivers
 * Description: Fetch all drivers
 */
router.get('/', (req, res) => {
    res.json(drivers); // Send all drivers
});

/**
 * GET /api/drivers/:ref
 * Description: Fetch a driver by their unique reference
 */
router.get('/:ref', (req, res) => {
    const { ref } = req.params; // Extract driver reference from URL

    // Filter drivers matching the reference (case-insensitive)
    const filteredDrivers = drivers.filter(d => 
        d.driverRef.toLocaleLowerCase() === ref.toLocaleLowerCase()
    );

    if (filteredDrivers.length > 0) {
        res.json(filteredDrivers); // Return the matching driver(s)
    } else {
        res.status(404).json({ error: `Driver with reference '${ref}' not found` }); // Return 404 error if no match
    }
});

module.exports = router; // Export the router for use in index.js