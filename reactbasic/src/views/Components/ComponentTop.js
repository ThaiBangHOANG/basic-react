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
      arrEmplois: [...this.state.arrEmplois, post], // xet toan bo arrEmplois sau do cho them post moi vao arr
    });
    // **********another way to code this part*********
    // let currentPost = this.state.arrEmplois;
    // currentPost.push(post);
    // this.setState({
    // arrEmplois: currentPost
    // })
  };

  deletePost = (post) => {
    let currentPost = this.state.arrEmplois;
    currentPost = currentPost.filter((item) => item.id !== post.id);
    this.setState({
      arrEmplois: currentPost,
    });
  };

  render() {
    return (
      <>
        <SubComponent addNewPost={this.addNewPost} />

        <ButtonShowHide
          arrEmplois={this.state.arrEmplois}
          deletePost={this.deletePost}
        />
      </>
    );
  }
}

export default ComponentTop;
