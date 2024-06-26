// Importing the Recipe model from ../models/Recipe.
const Recipe = require('../models/Recipe');

// getAll function retrieves all recipes from the database.
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

// getByCategory function retrieves all recipes belonging to the category from the database.
async function getByCategory(req, res) {
  const category = req.params.category;
  try {
    const recipes = await Recipe.find({category: category});
    if (recipes) {
      res.status(200).json(recipes);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// getById function retrieves recipe by id from the database.
async function getById(req, res) {
  const id = req.params.id;
  try {
    const recipe = await Recipe.findById(id);
    if (recipe) {
      res.status(200).json(recipe);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// Creating a new recipe based on data received in req.body.
async function create(req, res) {
  try {
    const key = req.query['api-key'];

    // Check for the absence of a key.
    if (!key) {
      res.status(400).send('API Key Required');
      return;
    }

    // Check for key validity.
    if (process.env.API_KEY !== key) {
      res.status(401).send('Invalid API Key');
      return;
    }

    // req.body will have the info that the user filled out on the frontend.
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
    const key = req.query['api-key'];

    // Check for the absence of a key.
    if (!key) {
      res.status(400).send('API Key Required');
      return;
    }

    // Check for key validity.
    if (process.env.API_KEY !== key) {
      res.status(401).send('Invalid API Key');
      return;
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body);
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
    const key = req.query['api-key'];

    // Check for the absence of a key.
    if (!key) {
      res.status(400).send('API Key Required');
      return;
    }

    // Check for key validity.
    if (process.env.API_KEY !== key) {
      res.status(401).send('Invalid API Key');
      return;
    }

    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (deletedRecipe) {
      res.status(204).json(deletedRecipe);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// Exporting functions to be used by other parts of the application (routes).
module.exports = {
  getAll,
  getByCategory,
  getById,
  create,
  update,
  remove
};