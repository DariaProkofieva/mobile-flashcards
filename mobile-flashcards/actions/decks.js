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
  return {
    type: ADD_CARD_TO_DECK,
    id,
    card
  };
}

export function handleCreateDeck(title) {
  return {
    type: CREATE_DECK,
    title
  };
}
