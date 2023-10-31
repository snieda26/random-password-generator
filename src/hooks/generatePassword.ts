import { ITypes } from "./useToggleFields";

export const generatePassword = (fields: ITypes, length: number = 1, isInvalidLength: boolean, minLength:number) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let chars = "";
  if (fields.includeLowercase) chars += lower;
  if (fields.includeUppercase) chars += upper;
  if (fields.includeNumbers) chars += numbers;
  if (fields.includeSymbols) chars += symbols;

  if (chars.length === 0) {
    alert("At least one char type.");
    return "";
  }

  if(isInvalidLength) {
    alert(`Sorry, we can't generate a password with the current settings. Please increase the character length to at least ${minLength}.`);
    return ""
  }

  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    generatedPassword += chars[randomIndex];
  }

  return generatedPassword;
};
