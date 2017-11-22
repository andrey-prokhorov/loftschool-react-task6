import { combineReducers } from "redux";
import {
  MOVE_ORDER_TO_CUSTOMER,
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from "../constants/actionTypes";

//import { MOVE_ORDER_TO_CUSTOMER } from "../actions/budgetTypes";
//import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
// import {sortOrderFn} from './helpers';

const profit = (state = 0, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      const { price } = action.payload;
      return state + price;
    default:
      return state;
  }
};

const marketExpanses = (state = 0, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return state + 20;
    default:
      return state;
  }
};

const farmExpanses = (state = 0, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return state + 100;
    default:
      return state;
  }
};

const deliveryExpanses = (state = 0, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return state + 20;
    default:
      return state;
  }
};

export default combineReducers({
  profit,
  marketExpanses,
  farmExpanses,
  deliveryExpanses
});

export const getBudgetOrders = state => state.budget.orders;
