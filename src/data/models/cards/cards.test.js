// Importing dependencies
const { expect } = require('chai');
const SequelizeMock = require('sequelize-mock');

// Setting up the mock database
const DBConnectionMock = new SequelizeMock();

// Mocking the Card Model
const CardModelMock = DBConnectionMock.define('Card', {
    name: 'Test Card',
    level: 1,
    type: 'Test Type',
    race: 'Test Race',
    attribute: 'Test Attribute',
    atk: 500,
    def: 500,
    desc: 'This is a test card',
    card_images: JSON.stringify({id: 1, image_url: "https://test.com/test.jpg"})
});

// Writing the tests
describe('Card Model', () => {
    it('should have a name', async () => {
        let card = await CardModelMock.findOne({ where: { name: 'Test Card' } });
        expect(card.name).to.equal('Test Card');
    });

    it('should have a level', async () => {
        let card = await CardModelMock.findOne({ where: { name: 'Test Card' } });
        expect(card.level).to.equal(1);
    });

    // ... similarly you can add more tests for other fields
});

