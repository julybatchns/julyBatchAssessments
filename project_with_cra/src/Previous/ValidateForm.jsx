import React, { useState } from "react";

function ValidateForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("red");

  function updateUserName(e) {
    setUserName(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function errorUpdate() {
    if (!userName || !password || !email) {
      setError("All Fields must be filled");
      setColor("red");
    } else if (!email.includes("@")) {
      setError("Email is invalid");
      setColor("red");
    } else {
      setError("No Error Found Congrats the user is logged in.");
      setColor("green");
    }
  }

  return (
    <>
      <div className="main">
        <form>
          <input
            type="text"
            placeholder="username"
            style={{ margin: "5px" }}
            value={userName}
            onChange={updateUserName}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            style={{ margin: "5px" }}
            value={password}
            onChange={updatePassword}
          />
          <br />
          <input
            type="email"
            placeholder="email"
            style={{ margin: "5px" }}
            value={email}
            onChange={updateEmail}
          />
          <br />
          <div className="error" style={{ margin: "5px", color: color }}>
            {error}
          </div>
          <button type="button" style={{ margin: "5px" }} onClick={errorUpdate}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default ValidateForm;
