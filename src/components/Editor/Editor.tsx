import React from "react";
import styled from "styled-components";

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

const Editor = () => {
    return (
        <EditorContainer>
            <StyledEditor />
        </EditorContainer>
    )
}

export default Editor;