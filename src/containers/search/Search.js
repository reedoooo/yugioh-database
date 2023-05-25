import {
  Box,
  Input,
  Select,
  SimpleGrid,
  // Image,
  VStack,
  // Text,
  FormLabel,
  Button,
  // GridItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { default as Axios } from "axios";
// import axios from "axios";
import "./search.css";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cards from "../cards/Cards";


var axios = Axios.create({
  baseURL: "https://db.ygoprodeck.com/api/v7/",
});

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [type, setType] = useState("");
  const [attribute, setAttribute] = useState("");
  const [level, setLevel] = useState("");
  //   const cards = useSelector((state) => state.cards);
  const [cards, setCards] = useState([]); // local state for cards

//   const request = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/v7?${queryBuilder()}`);
//       setCards(response.data);
//     } catch (err) {
//       alert(`I'm sorry, something went wrong =(.\n Change the parameters and try again`);
//     }
//   };
  
//   const queryBuilder = () => {
//     const params = [
//       name && `${name}`,
//       race && `race=${race}`,
//       type && `type=${type}`,
//       level && `level=${level}`,
//       attribute && `attribute=${attribute}`
//     ].filter(Boolean).join('&');
  
//     return params;
//   };
  
  
  const request = async () => {
    dispatch({ type: "SET_LOADING_STATE", payload: true });
    try {
      let response = await axios.get(`/${queryBuilder()}`);
      console.log(response.data);
      setCards(response.data.data); // Update the state with the first card data

      if (response.data.meta.pages_remaining !== 0) {
        dispatch({ type: "SET_HAS_MORE_ITEMS_TO_LOAD", payload: true });
        dispatch({
          type: "SET_NEXT_PAGE_TO_LOAD",
          payload: response.data.meta.next_page,
        });
      } else {
        dispatch({ type: "SET_HAS_MORE_ITEMS_TO_LOAD", payload: false });
      }
      dispatch({ type: "UPDATE_LISTER", payload: response.data.data });
      dispatch({ type: "SET_LOADING_STATE", payload: false });
    } catch (err) {
      alert(
        `I-i'm sorry, something just gone wrong =(.\n Change the parameters and try again`
      );
      dispatch({ type: "SET_LOADING_STATE", payload: false });
    }
  };

  const queryBuilder = () => {
    return `cardinfo.php?` + name + race + type + level + attribute;
  };

  console.log(cards);

  const levelSelector = (
    <>
      <FormLabel>Level</FormLabel>
      <Select
        onChange={({ target: { value } }) =>
          setLevel(value.toLowerCase() === "unset" ? "" : `&level=${value}`)
        }
      >
        <option defaultChecked={true}>Unset</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </Select>
    </>
  );
  const raceSelector = (
    <>
      {/* <FormLabel>{value}</FormLabel> */}
      <Select
        placeholder="Select option"
        onChange={({ target: { value } }) =>
          setRace(value.toLowerCase() === "unset" ? "" : `&race=${value}`)
        }
      >
        <option>Unset</option>
        <optgroup label="Monster Cards">
          <option>Aqua</option>
          <option> Beast</option>
          <option> Beast-Warrior</option>
          <option> Cyberse</option>
          <option> Dinosaur</option>
          <option> Divine-Beast</option>
          <option> Dragon</option>
          <option> Fairy</option>
          <option> Fiend</option>
          <option> Fish</option>
          <option> Insect</option>
          <option> Machine</option>
          <option> Plant</option>
          <option> Psychic</option>
          <option> Pyro</option>
          <option> Reptile</option>
          <option> Rock</option>
          <option> Sea Serpent</option>
          <option> Spellcaster</option>
          <option> tdunder</option>
          <option> Warrior</option>
          <option> Winged Beast</option>
          <option> Wyrm</option>
          <option> Zombie</option>
        </optgroup>
        <optgroup label="Spell Cards">
          <option>Normal</option>
          <option>Field</option>
          <option>Equip</option>
          <option>Continuous</option>
          <option>Quick-Play</option>
          <option>Ritual</option>
        </optgroup>
        <optgroup label="Trap Cards">
          <option>Normal</option>
          <option>Continuous</option>
          <option>Counter</option>
        </optgroup>
      </Select>
    </>
  );
  const typeSelector = (
    <>
      <Select
        onChange={({ target: { value } }) =>
          setType(value.toLowerCase() === "unset" ? "" : `&type=${value}`)
        }
      >
        <option>Unset</option>
        <optgroup label="Main Deck Types">
          <option>Effect Monster</option>
          <option>Flip Effect Monster</option>
          <option>Flip Tuner Effect Monster</option>
          <option>Gemini Monster</option>
          <option>Normal Monster</option>
          <option>Normal Tuner Monster</option>
          <option>Pendulum Effect Monster</option>
          <option>Pendulum Flip Effect Monster</option>
          <option>Pendulum Normal Monster</option>
          <option>Pendulum Tuner Effect Monster</option>
          <option>Ritual Effect Monster</option>
          <option>Ritual Monster</option>
          <option>Skill Card</option>
          <option>Spell Card</option>
          <option>Spirit Monster</option>
          <option>Toon Monster</option>
          <option>Trap Card</option>
          <option>Tuner Monster</option>
          <option>Union Effect Monster</option>
        </optgroup>
        <optgroup label="Extra Deck Types">
          <option>Fusion Monster</option>
          <option>Link Monster</option>
          <option>Pendulum Effect Fusion Monster</option>
          <option>Synchro Monster</option>
          <option>Synchro Pendulum Effect Monster</option>
          <option>Synchro Tuner Monster</option>
          <option>XYZ Monster</option>
          <option>XYZ Pendulum Effect Monster</option>
        </optgroup>{" "}
      </Select>
    </>
  );

  const attributeSelector = (
    <>
      <Select
        onChange={({ target: { value } }) =>
          setAttribute(
            value.toLowerCase() === "unset" ? "" : `&attribute=${value}`
          )
        }
      >
        <option>Unset</option>
        <option>Dark</option>
        <option>Divine</option>
        <option>Earth</option>
        <option>Fire</option>
        <option>Light</option>
        <option>Water</option>
        <option>and</option>
        <option>Wind</option>
      </Select>
    </>
  );

  return (
    <Box
      overflowY="scroll"
      height="70vh"
      css={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "gray.200",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.500",
          borderRadius: "20px",
        },
      }}
    >
      <VStack padding="5" spacing="5">
        <Input
          type="text"
          placeholder="Type card name"
          onChange={({ target: { value } }) => setName(`&fname=${value}`)}
        />
        <VStack spacing={3}>{levelSelector}</VStack>
        <VStack spacing={3}>{raceSelector}</VStack>
        <VStack spacing={3}>{typeSelector}</VStack>

        <VStack spacing={3}>{attributeSelector}</VStack>

        <Button
          className="search-button"
          onClick={() => {
            request();
          }}
        >
          Search
        </Button>

        {/* {cards &&
          cards.map((card, index) => (
            <Cards key={index} cardInfo={card} index={index} />
          ))} */}
        <SimpleGrid columns={3} spacing={10}>
          {cards &&
            cards.map((card, index) => {
              if (index < cards.length - 1) {
                return (
                    <Cards
                      key={index}
                      cardInfo={cards[index + 1]}
                      // savedCardsData={savedCardsData[index + 1]}
                      index={index}
                    />
                );
              }
              return null;
            })}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Search;
