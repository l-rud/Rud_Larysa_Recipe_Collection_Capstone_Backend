//Setting up a connection to a MongoDB database using Mongoose

//Loading dotenv module and calling config() on it
require('dotenv').config();

//Importing the Mongoose library, making it available for use in the code
const mongoose = require('mongoose');

//Mongoose connects to the MongoDB database
mongoose.connect(process.env.MONGO_URI);

//connection to the MongoDB database and listen for events related to the database connection
mongoose.connection
  .on('open', () => console.log('Connected to Mongoose'))//event handler prints a message
  .on('close', () => console.log('Disconnected from Mongoose'))//event handler prints a message
  .on('error', (error) => console.log(error));//event handler logs any errors that occur during the connection process

//Exporting the Mongoose instance for use throughout the application
module.exports = mongoose;
