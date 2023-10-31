import { useState } from "react";

export interface ITypes {
    includeLowercase: boolean,
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean,
}
export const defaultFields: ITypes = {
  includeLowercase: true,
  includeUppercase: false,
  includeNumbers: false,
  includeSymbols: false,
};

export const useToggleFields = () => {
  const [fields, setFields] = useState<ITypes>(defaultFields);

  const toggleField = (field: keyof typeof defaultFields) => {
    setFields({ ...fields, [field]: !fields[field] });
  };

  return { fields, toggleField };
};
