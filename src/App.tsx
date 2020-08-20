import React from "react";
import "./App.css";
import Editor from "./components/Editor";
import styled from "styled-components";
import Viewer from "./components/Viewer";
import MarkdownContextProvider from "./context/MarkdownContext";

// TODO: add dynamic imports
import { BoldIcon, ItalicIcon, UnderlineIcon } from "./styled/Icons";

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: whitesmoke;
  padding: 1em;
`;

const StyledOption = styled.button`
  margin: 0 1em;
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  min-height: 500px;
`;

function App() {
  return (
    <div className="App">
      <MarkdownContextProvider>
        <StyledHeaderContainer>
          <StyledOption>
            <BoldIcon height="25px" />
          </StyledOption>
          <StyledOption>
            <ItalicIcon height="25px" />
          </StyledOption>
          <StyledOption>
            <UnderlineIcon height="25px" />
          </StyledOption>
        </StyledHeaderContainer>
        <StyledContainer>
          <Editor />
          <Viewer />
        </StyledContainer>
      </MarkdownContextProvider>
    </div>
  );
}

export default App;
