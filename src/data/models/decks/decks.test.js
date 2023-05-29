const { Sequelize, DataTypes } = require("sequelize");
const deckModel = require("./deckModel.js");
const cardModel = require("./cardModel.js");

// Create a test database connection
const sequelize = new Sequelize("sqlite::memory:");

describe("Deck Model", () => {
  // Initialize the model with the test database connection
  const Deck = deckModel(sequelize, DataTypes);
  const Card = cardModel(sequelize, DataTypes);
  Deck.associate({Card});
  Card.associate({Deck});

  // Run before each test
  beforeEach(async () => {
    // Sync the model with the database to create the table
    await sequelize.sync({ force: true });
  });

  // Run after all tests
  afterAll(async () => {
    // Close the database connection
    await sequelize.close();
  });

  // ... existing tests ...

  it("should associate a deck with cards", async () => {
    // Create a new deck
    const deckData = {
      name: "Test Deck",
      description: "Test Deck Description",
      author: "Test Author",
    };
    const deck = await Deck.create(deckData);
    
    // Create some cards
    const cardData1 = { id: 1, name: "Card 1" };  // Assuming 'id' is auto-increment
    const cardData2 = { id: 2, name: "Card 2" };
    const card1 = await Card.create(cardData1);
    const card2 = await Card.create(cardData2);

    // Associate cards with the deck
    await deck.addCard(card1);
    await deck.addCard(card2);

    // Get the associated cards
    const cards = await deck.getCards();

    // Assertion
    expect(cards).toHaveLength(2);
    expect(cards[0].name).toEqual(cardData1.name);
    expect(cards[1].name).toEqual(cardData2.name);
  });

  // Add more tests as needed
});
