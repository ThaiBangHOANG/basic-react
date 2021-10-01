import React from "react";

class SubComponent extends React.Component {
  state = {
    post: "",
    salary: "",
  };

  handleChangePost = (event) => {
    this.setState({
      post: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.post || !this.state.salary) {
      alert("Please add all the information");
      return;
    }

    this.props.addNewPost({
      id: Math.floor(Math.random() * 100),
      post: this.state.post,
      salary: this.state.salary,
    });

    this.setState({
      post: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Post: </label> <br />
          <input
            type="text"
            value={this.state.post}
            onChange={(event) => this.handleChangePost(event)}
          />
          <br /> <br />
          <label htmlFor="fname">Salary: </label> <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </>
    );
  }
}

export default SubComponent;
