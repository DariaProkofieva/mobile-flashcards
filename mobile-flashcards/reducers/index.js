import { GET_DECKS, ADD_CARD_TO_DECK, CREATE_DECK } from "../actions/decks";

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: state[action.id].questions.concat([card])
        }
      };
    case CREATE_DECK:
      return {
        ...state,
        [action.id]: deck
      };
    default:
      return state;
  }
}
