import React, { useState } from "react";

const ReactFormFunc = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (userName && password) {
      const newEntry = {
        userName: userName,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);
      setUserName("");
      setPassword("");
    }
  };

  return (
    <div id="main">
      REACT FORMS
      <form id="form" onSubmit={submitForm}>
        <div>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            name="userName"
            id="userName"
            autoComplete="off"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      {allEntry.map((curElem, index) => (
        <div className="list" key={index}>
          <p>
            <b>USER NAME</b>: {curElem.userName} | <b>PASSWORD</b>:{" "}
            {curElem.password}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReactFormFunc;
