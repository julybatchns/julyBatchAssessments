import React from "react";

class ReactFormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      allEntry: [],
      password: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    const { userName, password, allEntry } = this.state;
    if (userName && password) {
      const newEntry = {
        userName: userName,
        password: password,
      };
      this.setState({
        allEntry: [...allEntry, newEntry],
        // allEntry: [{}, {}, {}, {}, {}, {}, {}, {}, {}, newEntry]
        userName: "",
        password: "",
      });
    }
  };

  render() {
    return (
      <div id="main">
        REACT FORMS
        <form id="form" action="" onSubmit={this.submitForm}>
          <div>
            <label htmlFor="userName">userName</label>
            <input
              type="text"
              name="userName"
              id="userName"
              autoComplete="off"
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
        {this.state.allEntry.map((curElem) => {
          return (
            <div className="list">
              <p>
                <b>USER NAME</b> :{curElem.userName} | <b>PASSDWORD:</b>{" "}
                {curElem.password}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ReactFormClass;
