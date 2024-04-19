import React from "react";

class FirstClassBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shubham Doe",
      enrollmentNo: "12345678",
      age: 34,
    };
  }

  changeAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Hello, my name is {this.state.name}</h1>
        <p>
          I am {this.state.age} years old and my enrollment no is
          {this.state.enrollmentNo}
        </p>
        <button type="button" onClick={this.changeAge}>
          Increase Age
        </button>
      </div>
    );
  }
}

export default FirstClassBased;
