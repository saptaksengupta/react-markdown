import React, { createContext, useReducer } from "react";
import { MarkdownReducer } from "../reducers/MarkdownReducer";
import { HEADER_TOOLSET_OPTIONS } from "../shared/app.constant";

export const MarkdownContext = createContext();

const MarkdownContextProvider = (props) => {
  const initialState = {
    editorText: "",
    headerTools: {
      [HEADER_TOOLSET_OPTIONS.BOLD]: false,
      [HEADER_TOOLSET_OPTIONS.ITALIC]: false,
      [HEADER_TOOLSET_OPTIONS.UNDERLINE]: false,
      [HEADER_TOOLSET_OPTIONS.HEADINGONE]: false,
      [HEADER_TOOLSET_OPTIONS.HEADINGTWO]: false,
      [HEADER_TOOLSET_OPTIONS.HEADINGTHREE]: false,
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
