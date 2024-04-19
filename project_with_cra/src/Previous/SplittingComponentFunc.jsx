import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  return (
    <div id="container">
      <Header id="header" content="This is the header" />
      <Main id="main" content="This is the main" />
      <Footer id="footer" content="This is the footer" />
    </div>
  );
}

export default App;

// Header----------------------------------------

// import React from "react";

function Header(props) {
  const { id, content } = props;
  return <header id={id}>{content}</header>;
}

// export default Header;

// Main----------------------------------------

// import React from "react";

function Main(props) {
  const { id, content } = props;
  return <main id={id}>{content}</main>;
}

// export default Main;

// Footer----------------------------------------

import React from "react";

function Footer(props) {
  const { id, content } = props;
  return <footer id={id}>{content}</footer>;
}

// export default Footer;
