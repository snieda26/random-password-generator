import  { useState } from "react";
import { generatePassword } from "hooks/generatePassword";
import { useToggleFields } from "hooks/useToggleFields";
import PasswordContainer from "../PasswordContainer";
import "./style.scss";

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(10);
  const { fields, toggleField } = useToggleFields();
  const [password, setPassword] = useState<string>("");
  const minLength = Object.values(fields).filter(el => Boolean(el)).length
  const isInvalidLength = minLength > length

  const generate = () => setPassword(generatePassword(fields, length, isInvalidLength, minLength));
  return (
    <div className={"passwordGenerator"}>
      <PasswordContainer password={password} />
      <div className={"sliderContainer"}>
        <label>Character length: {length}</label>
        <input
          type="range"
          min="1"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>
      <div className={"checkboxContainer"}>
        <label>
          <input
            type="checkbox"
            checked={fields.includeLowercase}
            onChange={() => toggleField("includeLowercase")}
          />
          Include Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={fields.includeUppercase}
            onChange={() => toggleField("includeUppercase")}
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={fields.includeNumbers}
            onChange={() => toggleField("includeNumbers")}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={fields.includeSymbols}
            onChange={() => toggleField("includeSymbols")}
          />
          Include Symbols
        </label>
      </div>
      <button className={"generateButton"} onClick={generate}>
        Generate
      </button>
    </div>
  );
};

export default PasswordGenerator;
