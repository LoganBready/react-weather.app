import React from "react";
require("dotenv").config();
class ContainerTwo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="containerTwo"></div>
      </div>
    );
  }
}
export default ContainerTwo;
