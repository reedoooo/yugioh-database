
const deckModel = (sequelize, DataTypes) => {
  const Deck = sequelize.define(
    "Deck",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, // assuming it's autoincrement
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    //   createdAt: {
    //     type: DataTypes.DATE,
    //     field: "created_at",
    //     defaultValue: DataTypes.NOW,
    //   },
    //   updatedAt: {
    //     type: DataTypes.DATE,
    //     field: "updated_at",
    //     defaultValue: DataTypes.NOW,
    //   },
    },
    {
      timestamps: false,  // needed for Sequelize to automatically update 'createdAt' and 'updatedAt'
    //   createdAt: 'createdAt',
    //   updatedAt: 'updatedAt'
    }
  );

  Deck.associate = function(models) {
    Deck.belongsToMany(models.Card, {
        through: "DeckCards",
        foreignKey: "deckId",
        otherKey: "cardId",
        as: "cards",
    });
  };

  return Deck;
};

module.exports = deckModel;
