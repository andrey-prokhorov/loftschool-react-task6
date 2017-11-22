import React, { Component } from "react";
import "./Budget.css";
import { connect } from "react-redux";
import {} from "../../reducers/budget";

export class Budget extends Component {
  render() {
    const {
      profit,
      marketExpanses,
      farmExpanses,
      deliveryExpanses
    } = this.props;

    return (
      <div className="budget">
        <h2>Budget</h2>
        <ul className="budget-list">
          <li>Total received money: {profit}</li>
          <li>
            Expenses of sellers: {marketExpanses !== 0 && "-"}
            {marketExpanses}
          </li>
          <li>
            Costs on the farm: {farmExpanses !== 0 && "-"}
            {farmExpanses}
          </li>
          <li>
            Shipping costs: {deliveryExpanses !== 0 && "-"}
            {deliveryExpanses}
          </li>
          <li>
            Total: {profit - marketExpanses - farmExpanses - deliveryExpanses}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.budget });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
