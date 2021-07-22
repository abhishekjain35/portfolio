import { useTheme } from "@emotion/react";
import Switch from "./styles/toggle";

const ToggleComponent = () => {
  const theme = useTheme();
  return (
    <Switch className="switch">
      <input type="checkbox" onClick={() => theme.toggle()} />
      <span className="slider round">
        <div className="moon"></div>
        <div className="sun"></div>
      </span>
      <div className="frame"></div>
    </Switch>
  );
};

export default ToggleComponent;
