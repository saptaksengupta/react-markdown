import React, { useContext } from "react";
import styled from "styled-components";

import { MarkdownContext } from "../../context/MarkdownContext";
import { MARKDOWN_ACTIONS } from '../../reducers/MarkdownReducer';

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

    const {dispatch} = useContext(MarkdownContext); 

    const onEditorChange = (event: any) => {
        const content = event.target.value.trim();
        dispatch({type: MARKDOWN_ACTIONS.SET_EDITOR_TEXT, payload: {editorText: content}});
    }

    return (
        <EditorContainer>
            <StyledEditor onChange={(e) => onEditorChange(e)} />
        </EditorContainer>
    )
}

export default Editor;