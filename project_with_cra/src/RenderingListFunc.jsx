import React from "react";
import "./RenderingListFunc.css";

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Leanne",
    email: "Leanne@april.biz",
    isFemale: true,
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Ervin",
    email: "Ervin@melissa.tv",
    isFemale: false,
  },
  {
    id: 3,
    name: "Samantha Bauch",
    username: "Samantha",
    email: "Samantha@yesenia.net",
    isFemale: true,
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Patricia",
    email: "Patricia.OConner@kory.org",
    isFemale: false,
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Chelsey",
    email: "Chelsey@annie.ca",
    isFemale: true,
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Dennis",
    email: "Dennis@jasper.info",
    isFemale: true,
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Kurtis",
    email: "Kurtis@billy.biz",
    isFemale: false,
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Nicholas",
    email: "Nicholas@rosamond.me",
    isFemale: false,
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    isFemale: true,
  },
  {
    id: 10,
    name: "Rey Padberg",
    username: "Rey",
    email: "Rey.Padberg@karina.biz",
    isFemale: false,
  },
];

const App = () => {
  return (
    <div id="main">
      {users.map((user) => {
        const { id, name, username, email, isFemale } = user;
        return (
          <div id="ID" key={id}>
            <h2 className="name">{name}</h2>
            <p className="userName">Username : {username}</p>
            <p className="gender">Gender : {isFemale ? "Female" : "Male"}</p>
            <p className="email">Email : {email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
