import React from "react";

class ReactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    job: "Dev",
    add: "Lille",
    arrPeople: [
      { id: "Per1", sex: "M", post: "Dev", salary: "3k" },
      { id: "Per2", sex: "F", post: "Ana", salary: "4k" },
      { id: "Per3", sex: "M", post: "Tes", salary: "5k" },
    ],
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
          <label for="fhtml">First Name: </label> <br /> <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />{" "}
          <br /> <br />
          <label for="fhtml">Last Name: </label> <br /> <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />{" "}
          <br /> <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </>
    );
  }
}

export default ReactForm;
