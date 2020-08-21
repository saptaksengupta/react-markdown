import { getKeysFromObject } from "../shared/app.utils";

export const MARKDOWN_ACTIONS = {
    SET_EDITOR_TEXT: 'SET_EDITOR_TEXT',
    SET_HEADER_ITEMS: 'SET_HEADER_ITEMS'
}

export const MarkdownReducer = (state, action) => {
    switch (action.type) {
        case MARKDOWN_ACTIONS.SET_EDITOR_TEXT:
            return {
                ...state,
                editorText: action.payload.editorText
            };
        case MARKDOWN_ACTIONS.SET_HEADER_ITEMS: 
            const itemToModify = getHeaderOptionsBaedOnType(action.payload); 
            return {
                ...state,
                headerTools: { ...state.headerTools, [itemToModify]: action.payload[itemToModify]}
            };
        default:
            return state;
    }
};

const getHeaderOptionsBaedOnType = (payload) => getKeysFromObject(payload)[0];