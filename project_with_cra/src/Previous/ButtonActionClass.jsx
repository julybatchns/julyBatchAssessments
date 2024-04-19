import React, { Component } from "react";

class ButtonActionClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changer: false,
    };
  }

  displayMessage = () => {
    this.setState({ changer: true });
  };

  render() {
    return (
      <>
        <div id="main">
          {this.state.changer === false ? null : (
            <p id="para">
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy
            </p>
          )}
          <button id="click" onClick={this.displayMessage}>
            Click Me
          </button>
        </div>
      </>
    );
  }
}

export default ButtonActionClass;
