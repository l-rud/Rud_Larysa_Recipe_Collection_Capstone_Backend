// Importing the Express.js framework into the script
const express = require('express');

// Creating an instance of an Express router, which then 
// define routes for GET HTTP method
const router = express.Router();

// Grab the controller functions
const { getAll } = require('../controllers/categories');

// Get all categories
router.get('/', getAll);

// Making this router available for use in other parts of the application
module.exports = router;