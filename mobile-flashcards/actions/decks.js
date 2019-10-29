export const GET_DECKS = "GET_DECKS";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const CREATE_DECK = "CREATE_DECK";

export function getDecks() {
  return {
    type: GET_DECKS
  };
}

export function addCardToDeck(id, card) {
  return {
    type: ADD_CARD_TO_DECK,
    id,
    card
  };
}

export function createDeck(title) {
  return {
    type: CREATE_DECK,
    title
  };
}
