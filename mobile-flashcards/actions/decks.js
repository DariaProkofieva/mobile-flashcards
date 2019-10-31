import { createDeck, addCardToDeck } from "../utils/api";
export const GET_DECKS = "GET_DECKS";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const CREATE_DECK = "CREATE_DECK";

export function handleGetDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function handleAddCardToDeck(id, card) {
  addCardToDeck(id, card);
  return {
    type: ADD_CARD_TO_DECK,
    id,
    card
  };
}

export function handleCreateDeck(newDeck) {
  return {
    type: CREATE_DECK,
    newDeck
  };
}
export function addDeckFunction(title) {
  return dispatch => {
    return createDeck(title).then(newDeck => {
      dispatch(handleCreateDeck(newDeck));
    });
  };
}

export function addCardFunction(id, card) {
  return dispatch => {
    return addCardToDeck(id, card).then(() => {
      dispatch(handleAddCardToDeck(id, card));
    });
  };
}
