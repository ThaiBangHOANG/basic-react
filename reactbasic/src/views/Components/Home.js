import React from "react";
// import { withRouter } from "react-router";
import Color from "../HigherOrderComponent/RandomColor";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/about");
    // }, 3000);
  }

  render() {
    return (
      <div>
        <span>Hello Home Component</span>
        <p>React Example Basic</p>
      </div>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
