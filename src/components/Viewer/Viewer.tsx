import React, { useContext } from "react";
import marked from "marked";

import { MarkdownContext } from "../../context/MarkdownContext";
import styled from "styled-components";

const StyledViewerContainer = styled.pre`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: flex-start;
`;

const StyledViewer = styled.pre`
  width: 100%;
  font-size: 16px;
  text-align: left;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
`;

marked.setOptions({
  renderer: new marked.Renderer(),
  // highlight: function(code, language) {
  //   const hljs = require('highlight.js');
  //   const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
  //   return hljs.highlight(validLanguage, code).value;
  // },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

const Viewer = () => {
  const { MarkdownContextState } = useContext(MarkdownContext);
  const { editorText } = MarkdownContextState;
  const markedContent = marked(editorText);
  return (
    <StyledViewerContainer>
      <StyledViewer
        dangerouslySetInnerHTML={{ __html: markedContent }}
      ></StyledViewer>
    </StyledViewerContainer>
  );
};

export default Viewer;
