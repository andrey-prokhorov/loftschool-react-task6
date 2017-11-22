import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order";
import "./Farm.css";
import { getFarmOrders } from "../../reducers/farm";
import {
  moveOrderToFarm,
  moveOrderToCustomer
} from "../../actions/farmActions";

export class Farm extends Component {
  moveOrderToCustomer = () => {
    const { orders } = this.props;
    const lastOrder = orders[orders.length - 1];
    this.props.moveOrderToCustomer(lastOrder);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Farm</h2>
        <button onClick={this.moveOrderToCustomer} disabled={!orders.length}>
          Send grown vegetables to the customer
        </button>

        <div className="order-list">
          {orders.map(order => <Order key={order.id} order={order} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ orders: getFarmOrders(state) });

const mapDispatchToProps = { moveOrderToFarm, moveOrderToCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
