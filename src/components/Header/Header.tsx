import React, { useContext } from "react";
import styled from "styled-components";
import { MarkdownContext } from "../../context/MarkdownContext";
import { MARKDOWN_ACTIONS } from "../../reducers/MarkdownReducer";
 
import { BoldIcon, ItalicIcon, UnderlineIcon } from "../../styled/Icons";

import { HEADER_TOOLSET_OPTIONS } from "../../shared/app.constant";

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

const Header = () => {

  const { markdownContextState, dispatch } = useContext(MarkdownContext);
  const {headerTools} = markdownContextState;

  console.log(headerTools);

  const onButtonClicked = (type: string) => {
    const payLoad = {[type]: !headerTools[type]};
    console.log(payLoad);
    dispatch({type: MARKDOWN_ACTIONS.SET_HEADER_ITEMS, payload: payLoad});
  };

  return (
    <StyledHeaderContainer>
      <StyledOption
        onClick={(e) => onButtonClicked(HEADER_TOOLSET_OPTIONS.BOLD)}
      >
        <BoldIcon height="25px" />
      </StyledOption>
      <StyledOption
        onClick={(e) => onButtonClicked(HEADER_TOOLSET_OPTIONS.ITALIC)}
      >
        <ItalicIcon height="25px" />
      </StyledOption>
      <StyledOption
        onClick={(e) => onButtonClicked(HEADER_TOOLSET_OPTIONS.UNDERLINE)}
      >
        <UnderlineIcon height="25px" />
      </StyledOption>
      <StyledOption
        onClick={(e) => onButtonClicked(HEADER_TOOLSET_OPTIONS.UNDERLINE)}
      >
        h1
      </StyledOption>
      <StyledOption
        onClick={(e) => onButtonClicked(HEADER_TOOLSET_OPTIONS.UNDERLINE)}
      >
        h2
      </StyledOption>
      <StyledOption
        onClick={(e) => onButtonClicked(HEADER_TOOLSET_OPTIONS.UNDERLINE)}
      >
        h3
      </StyledOption>
    </StyledHeaderContainer>
  );
};

export default Header;
