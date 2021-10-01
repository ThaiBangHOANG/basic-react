import React from "react";

class ButtonShowHide extends React.Component {
  state = {
    show: false,
    arrEmplois: [
      { id: "Jason", sex: "M", post: "Dev", salary: "3k" },
      { id: "Peter", sex: "F", post: "Ana", salary: "4k" },
      { id: "Max", sex: "M", post: "Tes", salary: "5k" },
    ],
  };

  handleButtonShowHide = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    let { arrEmplois } = this.props;
    let { show } = this.state;

    return (
      <>
        {show === false && (
          <div>
            <button onClick={() => this.handleButtonShowHide()}>Show</button>
          </div>
        )}

        {show === true && (
          <>
            <div>
              {arrEmplois.map((item, index) => {
                return (
                  <>
                    <div key={item.id}>
                      {item.post} - {item.salary}
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleButtonShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ButtonShowHide;
