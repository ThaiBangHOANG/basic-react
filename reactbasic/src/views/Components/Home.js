import React from "react";
// import { withRouter } from "react-router";
import Color from "../HigherOrderComponent/RandomColor";
import caphesang from "../../assets/images/ca-phe-sang.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/about");
    // }, 3000);
  }

  handleDeleteUser = (users) => {
    this.props.deleteUserRedux(users);
  };

  render() {
    let listUsers = this.props.dataRedux;

    return (
      <div>
        <span>Home Page</span>
        <p>React Example Basic</p>
        <img src={caphesang} alt="caphe" />
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
