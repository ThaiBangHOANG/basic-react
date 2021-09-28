import React from "react";

class ChildComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    job: "Dev",
    add: "Lille",
    arrPeople1: [
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
    let { firstName, lastName, job, arrPeople } = this.props;

    return (
      <>
        <div className="arr-people">
          {firstName} {lastName} , {job},
          {arrPeople.map((item, index) => {
            return (
              <div key={item.id}>
                {item.post} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChildComponent;
