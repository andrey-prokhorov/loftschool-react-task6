import React, { Component } from "react";
import "./Order.css";

export default class Order extends Component {
  render() {
    const { order } = this.props;
    return (
      <div className="order">
        <div className="order-name-price">
          <p>Name: {order.name}</p>
          <p>Price: {order.price}</p>
        </div>
        <div className="order-created">
          <p>Created: {order.createdTime}</p>
        </div>
      </div>
    );
  }
}
