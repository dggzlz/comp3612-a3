/**
 * File: constructors.js
 * Description:
 * This file contains routes for accessing Formula 1 constructor data.
 *
 * Endpoints:
 *  - GET /api/constructors: Fetch all constructors
 *  - GET /api/constructors/:ref: Fetch a constructor by its reference
 *
 * Author: Diego Gonzalez Reyes
 */

const express = require('express');
const router = express.Router();
const constructors = require('../data/constructors.json'); // Load constructors data from JSON file

/**
 * GET /api/constructors
 * Description: Fetch all constructors
 */
router.get('/', (req, res) => {
    res.json(constructors); // Send all constructors
});

/**
 * GET /api/constructors/:ref
 * Description: Fetch a constructor by its unique reference
 */
router.get('/:ref', (req, res) => {
    const { ref } = req.params; // Extract the constructor reference from the URL

    // Find constructors matching the reference (case-insensitive)
    const filteredConstructors = constructors.filter(c => 
        c.constructorRef.toLocaleLowerCase() === ref.toLocaleLowerCase()
    );

    if (filteredConstructors.length > 0) {
        res.json(filteredConstructors); // Return the matching constructor(s)
    } else {
        res.status(404).json({ error: `Constructor with reference '${ref}' not found` }); // Return 404 error if not found
    }
});

module.exports = router; // Export the router for use in index.js
