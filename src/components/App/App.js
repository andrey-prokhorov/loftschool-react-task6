import React, { Component } from "react";
import Market from "../Market/";
import Farm from "../Farm/";
import Budget from "../Budget/";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Market />
        <Farm />
        <Budget />
      </div>
    );
  }
}
