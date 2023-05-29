const cardModel = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "Card",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_images: {
        type: DataTypes.JSON, // Use JSON type for storing card_images
        allowNull: true,
      },
      frameType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      archetype: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      atk: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      def: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      attribute: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  Card.associate = function (models) {
    Card.belongsToMany(models.Deck, {
      through: "DeckCards",
      foreignKey: "cardId",
      otherKey: "deckId",
      as: "decks",
    });
  };

  return Card;
};

module.exports = cardModel;
