import React from "react";
import "./App.css";
import Editor from "./components/Editor";
import styled from "styled-components";
import Viewer from "./components/Viewer";
import MarkdownContextProvider from "./context/MarkdownContext";

// TODO: add dynamic imports


const StyledContainer = styled.div`
  padding: 3em;
  display: flex;

  div {
    flex: 1;
  }
`;

function App() {
  return (
    <div className="App">
      <MarkdownContextProvider>
        <StyledContainer>
          <Editor />
          <Viewer />
        </StyledContainer>
      </MarkdownContextProvider>
    </div>
  );
}

export default App;
