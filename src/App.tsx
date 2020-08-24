import React from "react";
import "./App.css";
import Editor from "./components/Editor";
import styled from "styled-components";
import Viewer from "./components/Viewer";
import MarkdownContextProvider from "./context/MarkdownContext";
import Header from "./components/Header";

// TODO: add dynamic imports

const StyledContainer = styled.div`
  display: flex;
  min-height: 100%;
  position: relative;
  top: 65.33px;
`;

function App() {
  return (
    <div className="App">
      <MarkdownContextProvider>
        <Header />
        <StyledContainer>
          <Editor />
          <Viewer />
        </StyledContainer>
      </MarkdownContextProvider>
    </div>
  );
}

export default App;
