import React, { createContext, useReducer } from 'react';
import { MarkdownReducer } from '../reducers/MarkdownReducer';


export const MarkdownContext = createContext();

const MarkdownContextProvider = (props) => {

    const initialState = {
        editorText: ""
    }

    const [MarkdownContextState, dispatch] = useReducer(MarkdownReducer, initialState);
    return (
        <MarkdownContext.Provider value={{MarkdownContextState, dispatch}}>
            {props.children}
        </MarkdownContext.Provider>
    )
}

export default MarkdownContextProvider;