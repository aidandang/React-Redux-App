import { 
  FETCH_CHARACTER_LIST_START,
  FETCH_CHARACTER_LIST_SUCCESS,
  FETCH_CHARACTER_LIST_FAIL,
} from "../actions";

const initialCharacterList = {
  characters: [],
  pages: '',
  error: '',
  isFetching: false
};

const rootReducer = (state = initialCharacterList, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_LIST_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        characters: action.payload.characters,
        pages: action.payload.pages,
        isFetching: false,
        error: ''
      };
    case FETCH_CHARACTER_LIST_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;

