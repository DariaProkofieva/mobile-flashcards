import { AsyncStorage } from "react-native";

import { generateID } from "./helpers";

const MOBILE_FLASHCARDS_STORAGE_KEY = "Flashacards:data";

export function initialData() {
  const initialData = {
    adfgadfg: {
      title: "React",
      id: "adfgadfg",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ]
    },
    asdgfsg: {
      title: "JavaScript",
      id: "asdgfsg",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  };
  AsyncStorage.setItem(
    MOBILE_FLASHCARDS_STORAGE_KEY,
    JSON.stringify(initialData)
  );
  return initialData;
}

// getDecks: return all of the decks along with their titles, questions, and answers.
export async function getDecks() {
  try {
    const value = await AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY);
    if (value !== null) {
      const data = JSON.parse(value);
      return data;
    } else {
      return initialData();
    }
  } catch (e) {
    console.error("AsyncStorage#getDecks error: " + error.message);
  }
}

// createDeck: create new deck with id, title and questions and add it to the decks.
export async function createDeck(title) {
  const id = generateID();
  const newDeck = {
    [id]: {
      title: title,
      id: id,
      questions: []
    }
  };
  await AsyncStorage.mergeItem(
    MOBILE_FLASHCARDS_STORAGE_KEY,
    JSON.stringify(newDeck)
  );
  return newDeck;
}

// addCardToDeck: take in two arguments, id and card, and will add the card to the list of questions for the deck with the associated id.
export async function addCardToDeck(id, card) {
  const value = await AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY);
  if (value !== null) {
    const data = JSON.parse(value);
    const deck = data[id].questions.concat([card]);
    await AsyncStorage.mergeItem(
      MOBILE_FLASHCARDS_STORAGE_KEY,
      JSON.stringify({ deck })
    );
    return deck;
  }
}
