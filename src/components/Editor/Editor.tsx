import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { MarkdownContext } from "../../context/MarkdownContext";
import { MARKDOWN_ACTIONS } from "../../reducers/MarkdownReducer";
import { getEditorContent } from "../../shared/app.utils";
import { EDITOR_INTRO } from "../../shared/app.constant";
const EditorContainer = styled.div`
  flex: 1;
  padding: 1em;
  border: 1px solid #efefef;
`;

const StyledEditor = styled.div`
  width: 99%;
  height: 99%;
  border: none;
  resize: none;
  font-size: 20px;
  text-align: left;
  &:focus {
    outline: none;
  }
`;

const Editor: React.FC = () => {
  const { dispatch } = useContext(MarkdownContext);

  useEffect(() => {
    // For demo only.
    setTimeout(() => {
      onEditorChange(null);
    }, 100)
  }, []);

  const onEditorChange = (event: any) => {
    parseAndSetContent(event);
  };

  const parseAndSetContent = (event: any) => {
    const content = getEditorContent();
    dispatch({
      type: MARKDOWN_ACTIONS.SET_EDITOR_TEXT,
      payload: { editorText: content }
    });
  }

  return (
    <EditorContainer>
      <StyledEditor id="editor-window" dangerouslySetInnerHTML={{__html: EDITOR_INTRO}} contentEditable="true" onInput={(e) => onEditorChange(e)} />
    </EditorContainer>
  );
};

export default Editor;
