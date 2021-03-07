/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const CHANGE_FILTERS = createActionName('CHANGE_FILTERS');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addTagPhrase = payload => ({ payload, type: ADD_TAG });
export const removeTagPhrase = payload => ({payload, type: REMOVE_TAG});
export const changeFilter = payload => ({payload, type: CHANGE_FILTERS});
// reducer
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAG:
      return {
        ...statePart,
        tags: action.payload,
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: [],
      };
    case CHANGE_FILTERS:
      return {
        ...statePart,
        duration: {...statePart.duration, [action.payload.type.type]: action.payload.type.value},
      };
    default:
      return statePart;
  }
}
