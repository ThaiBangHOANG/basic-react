import React from "react";

class Extra extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    job: "Dev",
    add: "Lille",
    arrPeople: [
      { id: "Jason", sex: "M", post: "Dev", salary: "3k" },
      { id: "Peter", sex: "F", post: "Ana", salary: "4k" },
      { id: "Max", sex: "M", post: "Tes", salary: "5k" },
    ],
  };

  addNewPost = (post) => {
    this.setSatate({
      arrPeople: this.state.arrPeople.push(post),
    });
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First Name: </label> <br /> <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br /> <br />
          <label htmlFor="fname">Last Name: </label> <br /> <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br /> <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </>
    );
  }
}

export default Extra;
