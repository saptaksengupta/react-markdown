export const MARKDOWN_ACTIONS = {
    SET_EDITOR_TEXT: 'SET_EDITOR_TEXT',
}

export const MarkdownReducer = (state, action) => {
    switch (action.type) {
        case MARKDOWN_ACTIONS.SET_EDITOR_TEXT:
            return {
                ...state,
                editorText: action.payload.editorText
            };
        default:
            return state;
    }
};
