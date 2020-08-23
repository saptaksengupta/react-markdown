import React, { useContext } from "react";
import styled from "styled-components";
import styles from "./header.module.scss";
import { MarkdownContext } from "../../context/MarkdownContext";
import { MARKDOWN_ACTIONS } from "../../reducers/MarkdownReducer";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "../../styled/Icons";

import { SUPPORTED_OPTIONS } from "../../shared/app.constant";
import { parseTextBasedOnChoice } from "../../shared/app.utils";

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

const Header: React.FC = () => {
  const { markdownContextState, dispatch } = useContext(MarkdownContext);
  const { headerTools } = markdownContextState;

  const onButtonClicked = (type: string) => {
    const payLoad = { [type]: !headerTools[type] };
    dispatch({ type: MARKDOWN_ACTIONS.SET_HEADER_ITEMS, payload: payLoad });
    const updatedText = parseTextBasedOnChoice(type);
    dispatch({
      type: MARKDOWN_ACTIONS.SET_EDITOR_TEXT,
      payload: { editorText: updatedText },
    });
  };

  return (
    <StyledHeaderContainer>
      <StyledOption
        className={headerTools[SUPPORTED_OPTIONS.BOLD] ? styles.activeBtn : ""}
        onClick={(e) => onButtonClicked(SUPPORTED_OPTIONS.BOLD)}
      >
        <BoldIcon height="25px" />
      </StyledOption>
      <StyledOption onClick={(e) => onButtonClicked(SUPPORTED_OPTIONS.ITALIC)}>
        <ItalicIcon height="25px" />
      </StyledOption>
      {/* <StyledOption
        onClick={(e) => onButtonClicked(SUPPORTED_OPTIONS.UNDERLINE)}
      >
        <UnderlineIcon height="25px" />
      </StyledOption> */}
      <StyledOption
        onClick={(e) => onButtonClicked(SUPPORTED_OPTIONS.HEADINGONE)}
      >
        h1
      </StyledOption>
      <StyledOption
        onClick={(e) => onButtonClicked(SUPPORTED_OPTIONS.HEADINGTWO)}
      >
        h2
      </StyledOption>
      <StyledOption
        onClick={(e) => onButtonClicked(SUPPORTED_OPTIONS.HEADINGTHREE)}
      >
        h3
      </StyledOption>
    </StyledHeaderContainer>
  );
};

export default Header;
