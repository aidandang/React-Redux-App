import axios from 'axios';

// API URLs
const apiurl = 'https://rickandmortyapi.com/api/character';

export const FETCH_CHARACTER_LIST_START = 'FETCH_CHARACTER_LIST_START';
export const FETCH_CHARACTER_LIST_SUCCESS = 'FETCH_CHARACTER_LIST_SUCCESS';
export const FETCH_CHARACTER_LIST_FAIL = 'FETCH_CHARACTER_LIST_FAIL';

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTER_LIST_START });
  axios
    .get(apiurl)
    .then(res =>
      dispatch({ type: FETCH_CHARACTER_LIST_SUCCESS, payload: { characters: res.data.results, pages: res.data.info.pages } })
    )
    .catch(err => dispatch({ type: FETCH_CHARACTER_LIST_FAIL, payload: err }));
};