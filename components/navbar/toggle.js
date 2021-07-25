import { useTheme } from "@emotion/react";
import Switch from "./styles/toggle";

const ToggleComponent = () => {
  const theme = useTheme();
  return (
    <Switch className="switch" htmlFor="themeInput">
      <input
        type="checkbox"
        id="themeInput"
        aria-label="Select Theme"
        onClick={() => theme.toggle()}
      />
      <span className="slider round">
        <div className="moon"></div>
        <div className="sun"></div>
      </span>
      <div className="frame"></div>
    </Switch>
  );
};

export default ToggleComponent;
