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

  render() {
    return (
      <div>
        <span>Home Page</span>
        <p>React Example Basic</p>
        <img src={caphesang} alt="caphe" />
      </div>
    );
  }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
  return { dataRedux: state.user };
};

export default connect(mapStateToProps)(Color(Home));
