import { SUPPORTED_OPTIONS } from "../shared/app.constant";

export const getEditorContent = () => {
  if (document.getElementById("editor-window")) {
    return document.getElementById("editor-window")?.innerText;
  }
};

const getSlectionRange = (selection: Selection) => selection.getRangeAt(0);

const deleteRangeContents = (selectionRange: Range) =>
  selectionRange.deleteContents();

export const getKeysFromObject = <K>(obj: K): Array<string> => Object.keys(obj);

export const getSelectedIfAny = () => window.getSelection();

export const parseTextBasedOnChoice = (choice: any) => {
  const selectionRange = getSelectedIfAny();
  const selectedRangeTxt = selectionRange?.toString();
  if (selectionRange?.rangeCount) {
    const range = getSlectionRange(selectionRange);
    deleteRangeContents(range);
    switch (choice) {
      case SUPPORTED_OPTIONS.BOLD:
        range.insertNode(makeItBold(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.ITALIC:
        range.insertNode(makeItItalic(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.UNDERLINE:
        range.insertNode(makeItUnderLine(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.HEADINGONE:
        range.insertNode(makeItHeaderOne(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.HEADINGTWO:
        range.insertNode(makeItHeaderTwo(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.HEADINGTHREE:
        range.insertNode(makeItHeaderThree(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.BLOCKQUOTE:
        range.insertNode(makeItBlockquote(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.UPPERCASE:
        range.insertNode(makeItUppercase(String(selectedRangeTxt)));
        break;
      case SUPPORTED_OPTIONS.LOWERCASE:
        range.insertNode(makeItlowercase(String(selectedRangeTxt)));
        break;
      default:
        break;
    }
  }
  return getEditorContent();
};

const makeItBold = <T>(text: T): Text =>
  document.createTextNode(`**${text ? text : "Bold Text"}**`);

const makeItItalic = <T>(text: T): Text =>
  document.createTextNode(`*${text ? text : "Italic Text"}*`);

const makeItUnderLine = <T>(text: T): Text =>
  document.createTextNode(`<u>${text ? text : "Underlined Text"}</u>`);

const makeItHeaderOne = <T>(text: T): Text =>
  document.createTextNode(`# ${text ? text : "Heading Level 1"}`);

const makeItHeaderTwo = <T>(text: T): Text =>
  document.createTextNode(`## ${text ? text : "Heading Level 2"}`);

const makeItHeaderThree = <T>(text: T): Text =>
  document.createTextNode(`### ${text ? text : "Heading Level 3"}`);

const makeItBlockquote = <T>(text: T): Text =>
  document.createTextNode(`> ${text ? text : "Blockquoted Text"}`);

const makeItUppercase = <T>(text: string): Text =>
  document.createTextNode(`${text ? text.toUpperCase() : "UPPERCASE TEXT"}`);

const makeItlowercase = <T>(text: string): Text =>
  document.createTextNode(`${text ? text.toLowerCase() : "lowercase text"}`);
