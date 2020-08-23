import { SUPPORTED_OPTIONS } from "../shared/app.constant";

export const getEditorContent = () => {
  if (document.getElementById("editor-window")) {
    return document.getElementById("editor-window")?.innerText;
  }
};

const getSlectionRange = (selection: Selection) => selection.getRangeAt(0); 

const deleteRangeContents = (selectionRange: Range) => selectionRange.deleteContents();

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
      // case SUPPORTED_OPTIONS.UNDERLINE:
      //   range.insertNode(makeItBold(selectedRangeTxt));
      //   break;
      case SUPPORTED_OPTIONS.HEADINGONE:
        range.insertNode(makeItHeaderOne(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.HEADINGTWO:
        range.insertNode(makeItHeaderTwo(selectedRangeTxt));
        break;
      case SUPPORTED_OPTIONS.HEADINGTHREE:
        range.insertNode(makeItHeaderThree(selectedRangeTxt));
        break;
      default:
        break;
    }
  }
  return getEditorContent();
}

const makeItBold = <T> (text: T): Text => document.createTextNode(`**${text}**`);

const makeItItalic = <T>(text: T): Text => document.createTextNode(`*${text}*`);
 

// const makeItUnderLine = <T>(text: T): Text => document.createTextNode(`*${text}*`);

const makeItHeaderOne = <T>(text: T): Text => document.createTextNode(`# ${text}`);

const makeItHeaderTwo = <T>(text: T): Text => document.createTextNode(`## ${text}`);

const makeItHeaderThree = <T>(text: T): Text => document.createTextNode(`### ${text}`);
