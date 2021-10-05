import React from "react";
import fullstack1 from "../../assets/images/fullstack1.png";

class News extends React.Component {
  render() {
    return (
      <div>
        <span>Dev News</span>
        <p>Technique using for Dev</p>
        <img alt="fullstack" src={fullstack1} />
      </div>
    );
  }
}

export default News;
