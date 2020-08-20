import React from "react";
import styled from "styled-components";
import { BoldIcon, ItalicIcon, UnderlineIcon } from '../../styled/Icons';


const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: whitesmoke;
    padding: 1em
`;

const StyledOption = styled.button`
    margin: 0 1em;
    background: none;
    border:none;
    &:focus {
        outline: none;
    }
`;

const StyledEditor = styled.textarea`
    width: 97.8%;
    height: 100%;
    border: 1px solid #efefef;
    padding: 1%;
    &:focus {
        outline: none;
    }
`;

const Editor = () => {
    return (
        <div style={{flex: '1'}}>
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
            <StyledEditor />
        </div>
    )
}

export default Editor;