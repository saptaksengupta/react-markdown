import { SUPPORTED_OPTIONS } from "../shared/app.constant";
import Lazy from "lazy.js";

export const getEditorContent = () => {
  // return document.getElementById('editor-window')?.innerText;
  if (document.getElementById("editor-window")) {
    return processHtml(document.getElementById("editor-window")?.innerHTML);
  }
};

const processHtml = (htmlStr: any) => {
  console.log(htmlStr.replace(/<\/?b>/g, "**"));
  return htmlStr.replace(/<\/?b>/g, "**");
};

export const getEditorTextFormat = () => {
  return document
    .getElementById("editor-window")
    ?.innerHTML.replace(/(<([^>]+)>)/gi, "");
};

export const getKeysFromObject = <K>(obj: K): Array<string> => Object.keys(obj);

export const getSelectedIfAny = () =>
  window.getSelection() ? window.getSelection()?.toString() : "";

export const makeTextBasedOnChoice = <T>(choice: String): boolean => {
  switch (choice) {
    case SUPPORTED_OPTIONS.BOLD:
      return makeItBold();
    case SUPPORTED_OPTIONS.ITALIC:
      return makeItItalic();
    case SUPPORTED_OPTIONS.UNDERLINE:
      return makeItUnderLine();
    case SUPPORTED_OPTIONS.HEADINGONE:
      return makeItHeaderOne();
    case SUPPORTED_OPTIONS.HEADINGTWO:
      return makeItHeaderTwo();
    case SUPPORTED_OPTIONS.HEADINGTHREE:
      return makeItHeaderThree();
    default:
      return false;
  }
};

const makeItBold = <T>(): boolean =>
  document.execCommand(SUPPORTED_OPTIONS.BOLD);

const makeItItalic = <T>(): boolean =>
  document.execCommand(SUPPORTED_OPTIONS.ITALIC);

const makeItUnderLine = <T>(): boolean =>
  document.execCommand(SUPPORTED_OPTIONS.UNDERLINE);

const makeItHeaderOne = <T>(): boolean =>
  document.execCommand('formatBlock', false, SUPPORTED_OPTIONS.HEADINGONE);

const makeItHeaderTwo = <T>(): boolean =>
  document.execCommand('formatBlock', false, SUPPORTED_OPTIONS.HEADINGTWO);

const makeItHeaderThree = <T>(): boolean =>
  document.execCommand('formatBlock', false, SUPPORTED_OPTIONS.HEADINGTHREE);
