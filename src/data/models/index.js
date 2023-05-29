"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const cardModel = require("./cards/model.js");
const deckModel = require("./decks/model.js");
const DataCollection = require("./data-collection.js");
console.log(DataCollection)
const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory:";

const sequelize = new Sequelize(DATABASE_URL);

const models = {
  Deck: deckModel(sequelize, DataTypes),
  Card: cardModel(sequelize, DataTypes),
};
console.log('----------------Index1--------------------', models);
// Instantiate the collections with the DataCollection wrapper
const cards = new DataCollection(models.Card);
console.log('----------------Index2--------------------', cards);
const decks = new DataCollection(models.Deck);
console.log('----------------Index3--------------------', decks);
module.exports = {
  cardAndDecksDB: sequelize,
  cards: cards,
  decks: decks,
};


