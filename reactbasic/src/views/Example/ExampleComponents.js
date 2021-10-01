import React from "react";
import ReactForm from "./ReactForm";

class ExampleComponents extends React.Component {
  state = {
    name: "Thai Bang",
    channel: "bang",
  };

  hanldOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = (event) => {
    alert("click me");
  };

  render() {
    return (
      <>
        <div className="first">
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.hanldOnChangeName(event)}
          />
          Hello, my name is {this.state.name}
        </div>{" "}
        <br />
        <div className="second">
          Hello, my channel is {this.state.channel}
          <button
            type="text"
            value={this.state.channel}
            onClick={() => this.handleClickButton()}
          >
            {" "}
            Click me
          </button>
        </div>{" "}
        <br />
        <ReactForm />
      </>
    );
  }
}

export default ExampleComponents;
