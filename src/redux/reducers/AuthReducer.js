import {SIGNIN, SIGNOUT, SETCURRENTUSER} from '../actions/types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN:
      return {...state, currentUser: action.payload};
    case SIGNOUT:
      return {...state, currentUser: null};
    case SETCURRENTUSER:
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
};
