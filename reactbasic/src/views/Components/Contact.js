import React from "react";
import Color from "../HigherOrderComponent/RandomColor";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <span>Contact Page</span>
        <p>Some informations come here</p>
      </div>
    );
  }
}

export default Color(Contact);
