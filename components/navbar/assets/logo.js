import { useTheme } from "@emotion/react";
import {LogoSvg} from "../styles/navbar"

const Logo = () => {
  const theme = useTheme();
  return (
    <LogoSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="55"
      viewBox="2 6 45 36"
      style={{
        background: theme.text,
        borderRadius: "50%",
      }}
    >
      <path
        fill={theme.background}
        d="M32.78,32.672c0,0.28-0.14,0.448-0.504,0.448l-2.492,0c-0.588,0-0.784-0.224-0.952-0.672l-1.456-4.116l-7.084,0l-1.456,4.2c-0.112,0.364-0.308,0.588-0.756,0.588l-2.492,0c-0.28,0-0.392-0.14-0.392-0.364c0-0.084,0-0.196,0.056-0.308l6.832-18.144c0.14-0.336,0.336-0.56,0.756-0.56l2.24,0c0.42,0,0.672,0.196,0.784,0.504l6.86,18.06c0.056,0.14,0.056,0.252,0.056,0.364z M26.424,25.616l-1.988-5.908c-0.252-0.784-0.42-1.372-0.56-1.82l-0.056,0c-0.14,0.476-0.308,1.064-0.588,1.848l-1.988,5.88l5.18,0z M39.878,31.608c0,1.148-1.036,1.876-1.988,1.876c-0.98,0-1.988-0.672-1.988-1.848c0-1.204,0.952-1.904,1.988-1.904c1.008,0,1.988,0.7,1.988,1.876z"
      />
      <path fill="#" d="" />
    </LogoSvg>
  );
};

export default Logo;
