// Importing the Recipe model from ../models/Recipe
const Recipe = require('../models/Recipe');

// getAll function retrieves all recipes from the database
async function getAll(req, res) {
  try {
    const recipes = await Recipe.find({});
    if (recipes) {
      res.status(200).json(recipes);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// Creating a new recipe based on data received in req.body
async function create(req, res) {
  try {
    // req.body will have the info that the user filled out on the frontend
    const createdRecipe = await Recipe.create(req.body);
    if (createdRecipe) {
      res.status(201).json(createdRecipe);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// Updating a recipe in the database based on the id passed in req.params.id.
async function update(req, res) {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id);
    if (updatedRecipe) {
      res.status(200).json(updatedRecipe);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// Deleting a recipe from the database based on the id passed in req.params.id.
async function remove(req, res) {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (deletedRecipe) {
      res.status(204).json(deletedRecipe);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

//Exporting the getAll, create, and destroy functions 
//so they can be used by other parts of the application (routes)

module.exports = {
  getAll,
  create,
  update,
  remove
};