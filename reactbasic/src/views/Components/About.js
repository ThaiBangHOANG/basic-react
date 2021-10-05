import React from "react";
import about from "../../assets/images/about.jpg";

class About extends React.Component {
  render() {
    return (
      <div>
        <span>About Page</span>
        <p>React View</p>
        <img src={about} alt="view" />
      </div>
    );
  }
}

export default About;
