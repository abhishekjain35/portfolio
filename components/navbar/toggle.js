import { useTheme } from "@emotion/react";
import Switch from "./styles/toggle";

const ToggleComponent = ({mobile}) => {
  const theme = useTheme();
  return (
    <Switch className="switch" htmlFor="themeinput" mobile={mobile}>
      <input
        type="checkbox"
        id="themeinput"
        checked={theme.darkMode}
        onChange={() => theme.toggle()}
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
