import React from "react";

class ShowHide extends React.Component {
  state = {
    show: false,
  };

  handleShowHide = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    let { arrPeople } = this.props;
    let { show } = this.state;

    return (
      <>
        {show === false && (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        )}

        {show === true && (
          <>
            <div>
              {arrPeople.map((item, index) => {
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
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
            {/* To write code clearly and shortly

            {show === false ?
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        )}
        :
          <>
            <div>
              {arrPeople.map((item, index) => {
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
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
            */}
          </>
        )}
      </>
    );
  }
}

export default ShowHide;
