import { BANK_BRANCH, FAV_BANK } from "../actions";
import { combineReducers } from "redux";

function banks(state = [], action) {
  switch (action.type) {
    case BANK_BRANCH:
      return action.branches;
    default:
      return state;
  }
}

function favBank(state = [], action) {
  switch (action.type) {
    case FAV_BANK:
      state = [...state, action.bank];
      return state;
    default:
      return state;
  }
}

const rootReducers = combineReducers({ banks, favBank });
export default rootReducers;
