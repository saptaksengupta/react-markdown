import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { MarkdownContext } from "../../context/MarkdownContext";
import { MARKDOWN_ACTIONS } from "../../reducers/MarkdownReducer";

const EditorContainer = styled.div`
  flex: 1;
  padding: 1em;
  border: 1px solid #efefef;
`;

const StyledEditor = styled.textarea`
  width: 99%;
  height: 99%;
  border: none;
  resize: none;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

const Editor: React.FC = () => {
  const { markdownContextState, dispatch } = useContext(MarkdownContext);
  const { editorText } = markdownContextState;

  const [content, setContent] = useState(editorText);

  useEffect(() => {
    setContent(editorText);
  }, [editorText]);

  // parse entire text based on
  // current header selection state
  const parseText = (content: string) => {
    return content;
  };

  

  const onEditorChange = (event: any) => {
    parseAndSetContent(event);
  };

  const parseAndSetContent = (event: any) => {
    const content = event.target.value;
    const parsedStr = parseText(content);
    dispatch({
      type: MARKDOWN_ACTIONS.SET_EDITOR_TEXT,
      payload: { editorText: parsedStr }
    });
  }

  return (
    <EditorContainer>
      <StyledEditor value={content} onChange={(e) => onEditorChange(e)} />
    </EditorContainer>
  );
};

export default Editor;
