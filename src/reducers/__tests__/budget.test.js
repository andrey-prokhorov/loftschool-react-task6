import budget from "../budget";
import {
  MOVE_ORDER_TO_CUSTOMER,
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from "../../constants/actionTypes";

describe("reducer budget", () => {
  it("экшен с типом MOVE_ORDER_TO_CUSTOMER увеличивает deliveryExpanses на 20", () => {
    const next = budget({}, { type: MOVE_ORDER_TO_CUSTOMER });
    expect(next.deliveryExpanses).toEqual(20);
  });

  it("экшен с типом CREATE_ORDER увеличивает profit на action.payload.price", () => {
    const next = budget({}, { type: CREATE_ORDER, payload: { price: 111 } });
    expect(next.profit).toEqual(111);
  });

  it("экшен с типом MOVE_ORDER_TO_FARM увеличивает farmExpanses на 100", () => {
    const next = budget({}, { type: MOVE_ORDER_TO_FARM });
    expect(next.farmExpanses).toEqual(100);
  });
});
