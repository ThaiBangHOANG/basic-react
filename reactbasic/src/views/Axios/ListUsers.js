import React from "react";
import axios from "axios";
import "./ListUsers.scss";

class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };

  // using promise to handle asynronize
  // componentDidMount() {
  //   axios.get("https://reqres.in/api/users?page=2").then((res) => {
  //     console.log(res.data.data);
  //   });
  // }

  // another way to use axios that is using async/await
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  render() {
    let { listUsers } = this.state;

    return (
      <div className="list-users-container">
        <div className="title">Fetch the list users</div>
        <div className="list-users-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListUsers;
