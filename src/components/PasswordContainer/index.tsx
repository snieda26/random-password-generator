import { copyToClipboard } from "utils/copyToClipboard";
import "./style.scss";
interface PasswordContainerProps {
  password: string;
}

const PasswordContainer = ({ password }: PasswordContainerProps) => {
  return (
    <div className="passwordContainer">
      <input type="text" readOnly value={password} className="passwordInput" />
      <span className="clipboardIcon" onClick={() => copyToClipboard(password)}>
        📋
      </span>
    </div>
  );
};

export default PasswordContainer;
