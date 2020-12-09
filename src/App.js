import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import { AuthProvider } from "./contexts/auth";
import Header from "./components/Header";
import Container from "./components/Container";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
