// Importing the Recipe model from ../models/Recipe
const Recipe = require('../models/Recipe');

// getAll function retrieves all unique categories from the database
async function getAll(req, res) {
  try {
    const categories = await Recipe.collection.distinct('category');
    if (categories) {
      res.status(200).json(categories);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// Exporting getAll method 
// so it can be used by other parts of the application (routes)

module.exports = {
  getAll
};