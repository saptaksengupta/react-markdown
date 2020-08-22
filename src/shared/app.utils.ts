import { SUPPORTED_OPTIONS } from "../shared/app.constant";

export const getKeysFromObject = <K> (obj: K): Array<string> => Object.keys(obj);

export const getSelectedIfAny = (): string | undefined => window.getSelection()?.toString();

export const makeTextBasedOnChoice = <T> (text: T, choice: String): String => {
    switch(choice) {
        case SUPPORTED_OPTIONS.BOLD:
            return makeItBold(text);
        case SUPPORTED_OPTIONS.ITALIC:
            return makeItItalic(text);
        default:
            return '';
    }
}

const makeItBold = <T> (value: T): String => `**${value}**`;

const makeItItalic = <T> (value: T): String => `*${value}*`;