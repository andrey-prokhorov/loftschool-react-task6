import React, { Component } from "react";
import "./Market.css";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";
import Order from "../Order";
import { connect } from "react-redux";

let id = 0;
const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  "Cabbage",
  "Radish",
  "Cucumbers",
  "Carrot",
  "Peas",
  "Aubergine",
  "Pumpkin",
  "Garlic",
  "Bow",
  "Pepper",
  "Potatoes",
  "Radish"
];

const createRandomOrder = () => {
  const currentTime = new Date();

  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdTime:
      currentTime.toLocaleDateString("ru-RU") +
      " " +
      currentTime.getHours() +
      ":" +
      currentTime.getMinutes()
  };
};

export class Market extends Component {
  createOrder = () => {
    this.props.createOrder(createRandomOrder());
  };

  moveOrderToFarm = () => {
    const { orders } = this.props;
    const lastOrder = orders[orders.length - 1];
    this.props.moveOrderToFarm(lastOrder);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <div className="control-panel">
          <h2>Market</h2>
          <button onClick={this.createOrder}>Add an order</button>
          <button
            onClick={this.moveOrderToFarm}
            disabled={!this.props.orders.length}
          >
            Send latest order to the farm
          </button>
        </div>

        <div className="order-list">
          {orders.map(order => <Order key={order.id} order={order} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ orders: state.market.orders });

const mapDispatchToProps = dispatch => ({
  createOrder: order => dispatch(createOrder(order)),
  moveOrderToFarm: order => dispatch(moveOrderToFarm(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
