import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="headerUser">
          <span>The Weather App</span>
        </div>
      </div>
    );
  }
}
export default Header;
