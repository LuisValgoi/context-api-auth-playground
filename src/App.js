import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import Header from "./components/Header";
import Container from "./components/Container";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
