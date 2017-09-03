// https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be
import { PropTypes } from 'react';

export const types = {
  SELECT: 'PROJECT/PROJECT_SELECT',
};
export const actions = {
  select: id => ({ type: types.SELECT, id }),
};

const initialState = {
  selected: null,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT:
      return {
        ...state,
        selected: action.id,
      };
    default:
      return state;
  }
};

export default reducer;

export const PROP_TYPES = {
  items: PropTypes.array,
  selected: PropTypes.string,
};

export const DEFAULT_PROPS = {
  items: [],
  selected: null,
};
