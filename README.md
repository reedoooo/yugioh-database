<<<<<<< HEAD
# yugioh-database
=======
# yugioh-database

## Project: Yugioh Deck Builder

### Author: Reed Vogt and Ryan Eastman

### Problem Domain  

The Yugioh Deck Builder app aims to provide a platform for Yugioh players to easily build and manage their decks. It allows users to search for Yugioh cards, add them to their deck, save their deck, and perform various operations on the deck such as updating and deleting.

### Links and Resources

- [Github Repository](http://xyz.com) (when applicable)
- [back-end Server Repository](http://xyz.com) (when applicable)
- [Deployed Application](http://xyz.com) (when applicable)
- [GitHub Actions ci/cd](https://github.com/rkgallaway/server-deployment-practice-d51/actions) 

### Collaborators

Reed Vogt and Ryan Eastman

### Setup

#### `.env` requirements (where applicable)

- No specific environment variables are required at the moment.

#### How to initialize/run your application (where applicable)

- Clone the repository: git clone https://github.com/your-username/yugioh-deck-builder.git
- Navigate to the project directory: cd yugioh-deck-builder
- Install dependencies: npm install
- Start the application: npm start

#### How to use your library (where applicable)

- Open the Yugioh Deck Builder application in a web browser.
- Use the search feature to find Yugioh cards by their name, race, type, level, and attribute.
- Click on the desired card to add it to your deck.
- Build your deck by adding multiple cards.
- Save your deck by providing a name, description, and author.
- Update your deck by adding or removing cards.
- Delete a deck by its name.
- View and manage your decks through the interface.

#### Features / Routes

- Search Feature: Allows users to search for Yugioh cards based on their name, race, type, level, and attribute.
- GET: /cards - Retrieves a list of cards based on the search parameters.
- POST: /decks - Creates a new deck with the provided name, description, and author.
- PUT: /decks/:id - Updates an existing deck by adding or removing cards.
- DELETE: /decks/:id - Deletes a deck by its ID.

#### Tests

- The tests can be run using the command: npm test
- The tests cover the functionality of the search feature, deck creation, update, and deletion.

#### UML

[Website Blockframe]()
>>>>>>> work
