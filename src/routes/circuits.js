/**
 * File: circuits.js
 * Description:
 * This file contains routes for accessing Formula 1 circuit data.
 *
 * Endpoints:
 *  - GET /api/circuits: Fetch all circuits
 *  - GET /api/circuits/:id: Fetch a circuit by its unique ID
 *
 * Author: Diego Gonzalez Reyes
 */

const express = require('express');
const router = express.Router();
const circuits = require('../data/circuits.json'); // Import circuits data from JSON file

/**
 * GET /api/circuits
 * Description: Fetch all circuits
 */
router.get('/', (req, res) => {
    res.json(circuits); // Send all circuits
});

/**
 * GET /api/circuits/:id
 * Description: Fetch a specific circuit by its unique ID
 */
router.get('/:id', (req, res) => {
    const { id } = req.params; // Extract the circuit ID from the URL
    const circuit = circuits.filter(c => c.circuitId == id); // Find the circuit by ID

    if (circuit.length > 0) {
        res.json(circuit); // Return the circuit if found
    } else {
        res.status(404).json({ error: `Circuit with ID ${id} not found` }); // Return 404 error if not found
    }
});

module.exports = router; // Export the router for use in index.js
