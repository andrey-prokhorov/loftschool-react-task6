import { combineReducers } from "redux";
import { sortOrderFn } from "./helpers";
import {
  MOVE_ORDER_TO_CUSTOMER,
  MOVE_ORDER_TO_FARM
} from "../constants/actionTypes";

const orders = (state = [], action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return [...state, action.payload];

    case MOVE_ORDER_TO_CUSTOMER:
      return state.filter(x => x.id !== action.payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  orders
});

export const getFarmOrders = state =>
  state.farm.orders.concat().sort(sortOrderFn);
