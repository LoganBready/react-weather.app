import React, { Component } from "react";
import ContainerOne from "../components/ContainerOne";
import ContainerTwo from "../components/ContainerTwo";
require("dotenv").config();

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ContainerOne />
        <ContainerTwo />
      </div>
    );
  }
}

export default Home;
