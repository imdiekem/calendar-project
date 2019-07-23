import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { StyledContainer } from "./components/Layout/styled-components";

import Calendar from "./containers/Calendar";

function App() {
  return (
    <div className="App">
      <StyledContainer>
        <Calendar />
      </StyledContainer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
