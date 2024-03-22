import React from "react";

class CounterAppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count === 0) return;
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </>
    );
  }
}

export default CounterAppClass;
