const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const item_model = require("./item_model.js");

const app = express();
const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set("debug", true);

mongoose.connect( MONGODB_URI, {} )
  .catch((error) => console.log(error));
  

  // get all items

// async function getItems(name) {
//   let result;
//   if (name === undefined) {
//     result = await item_model.find();
//   } 
//   // { ... }
//   return result;
// }


  // get item by identifier

// async function findItemById(id) {
//   try {
//     return await item_model.findById(id);
//   } catch (error) {
//     console.log(error);
//     return undefined;
//   }
// }

async function addItem(item) {
  try {
    const itemToAdd = new item_model(item);
    const saveditem = await itemToAdd.save();
    return saveditem;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function findItemByName(name) {
  return await item_model.find({ name: name });
}

app.listen(port, () => {
  console.log(`Connection Successful! Listening...`);
});

module.exports = app;