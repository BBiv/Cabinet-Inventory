import mongoose from "mongoose";
import item_model from "./item_model.js";

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongodb_uri = process.env.MONGODB_URI;

mongoose.set("debug", true);

mongoose.connect(
    mongodb_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
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

export default {
  addItem,
  findItemByName,
};