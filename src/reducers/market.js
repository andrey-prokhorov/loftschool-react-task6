import { combineReducers } from "redux";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../constants/actionTypes";
import { sortOrderFn } from "./helpers";

const orders = (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, action.payload];

    case MOVE_ORDER_TO_FARM:
      return state.filter(x => x.key !== action.payload.key);

    default:
      return state;
  }
};

export default combineReducers({
  orders
});

export const getMarketOrders = state =>
  state.market.orders.concat().sort(sortOrderFn);
