import React, { createContext, useReducer } from "react";
import { MarkdownReducer } from "../reducers/MarkdownReducer";
import { SUPPORTED_OPTIONS } from "../shared/app.constant";

export const MarkdownContext = createContext();

const MarkdownContextProvider = (props) => {
  const initialState = {
    editorText: "",
    headerTools: {
      [SUPPORTED_OPTIONS.BOLD]: false,
      [SUPPORTED_OPTIONS.ITALIC]: false,
      [SUPPORTED_OPTIONS.UNDERLINE]: false,
      [SUPPORTED_OPTIONS.HEADINGONE]: false,
      [SUPPORTED_OPTIONS.HEADINGTWO]: false,
      [SUPPORTED_OPTIONS.HEADINGTHREE]: false,
    },
  };

  const [markdownContextState, dispatch] = useReducer(
    MarkdownReducer,
    initialState
  );

  return (
    <MarkdownContext.Provider value={{ markdownContextState, dispatch }}>
      {props.children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownContextProvider;
