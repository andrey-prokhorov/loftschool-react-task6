import {
  MOVE_ORDER_TO_CUSTOMER,
  MOVE_ORDER_TO_FARM
} from "./../constants/actionTypes";

export const moveOrderToCustomer = payload => ({
  type: MOVE_ORDER_TO_CUSTOMER,
  payload
});

export const moveOrderToFarm = payload => ({
  type: MOVE_ORDER_TO_FARM,
  payload
});
