import React from "react";
import ButtonShowHide from "./ButtonShowHide";
import SubComponent from "./SubComponent";

class ComponentTop extends React.Component {
  state = {
    arrEmplois: [
      { id: "Jason", sex: "M", post: "Dev", salary: "3k" },
      { id: "Peter", sex: "F", post: "Ana", salary: "4k" },
      { id: "Max", sex: "M", post: "Tes", salary: "5k" },
    ],
  };

  addNewPost = (post) => {
    this.setState({
      arrEmplois: [...this.state.arrEmplois, post],
    });
  };

  render() {
    return (
      <>
        <SubComponent addNewPost={this.addNewPost} />

        <ButtonShowHide arrEmplois={this.state.arrEmplois} />
      </>
    );
  }
}

export default ComponentTop;
