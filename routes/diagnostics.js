const diagnostics = require('express').Router();
const diagnosticsData = require("../db/diagnostics.json");

const { v4: uuidv4 } = require('uuid');
const { date } = require('date-and-time');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
   // TODO: Logic for sending all the content of db/diagnostics.json
  res.json(diagnosticsData);
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file

const {username, tip, topic} = req.body;

if (!username || tip.length<15) {
  const newError = {
    username,
    tip,
    time: date-and-time(),
    errors: {
      tip: "",
      topic: "Gaming is not a valid topic",
      username: ""
    },
    error_id: uuid(),
  },
}











  readFromFile("../db/diagnostics.json", (err, diagnosticsData) => {
    let newData = [];
    
    if (err) {
      throw err;
    } else {
      newData.push()
    }
    
  
  



  readAndAppend()
});

module.exports = diagnostics;
