//Importing the Express.js framework into my script
const express = require('express');

//Creating an instance of an Express router, which then 
// define routes for different HTTP methods (GET, POST, PATCH, DELETE)
const router = express.Router();

// Grab the controller functions
const { getAll, getByCategory, getById, create, update, remove } = require('../controllers/recipes');

// Get all recipes
router.get('/', getAll);

// Get all recipes by category
router.get('/category/:category', getByCategory);

// Get single recipe by id
router.get('/:id', getById);

// Create a recipe
router.post('/', create);

// Update a recipe
router.patch('/:id', update);

// Delete a recipe
router.delete('/:id', remove);

//Making this router available for use in other parts of the application
module.exports = router;