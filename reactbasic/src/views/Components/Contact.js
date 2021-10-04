import React from "react";
import Color from "../HigherOrderComponent/RandomColor";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <span>Hello Contact Component</span>
        <p>React Example Basic</p>
      </div>
    );
  }
}

export default Color(Contact);
