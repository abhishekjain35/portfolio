import styled from "@emotion/styled";

const Switch = styled.label`
  .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 2px;
    box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background: #fff;
    color: #333;
    font-family: "Open Sans", Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: -99;
    transition: 0.5s ease;
  }

  /* position: absolute;
  left: 50%;
  top: 50%; */
  margin-top: 25px;
  margin-bottom: -10px;
  transform: translate(-50%, -50%);
  width: 65px;
  height: 34px;
  ${({ mobile }) =>
    mobile
      ? `
      @media only screen and (max-width: 600px) {
    display: initial;
  }
  @media only screen and (min-width: 601px) {
    display: none;
  }
  margin-left: 60px;
`
      : null}

  input {
    opacity: 0;
    width: 0;
    height: 0;
    z-index: 99;

    &:checked ~ .frame {
      background-color: #34495e;
      transition: 0.5s ease;
    }
    &:checked + .slider {
      background-color: black;
      .moon {
        opacity: 1;
        transition: opacity 0.5s ease;
      }
      .sun {
        opacity: 0;
        transition: opacity 0.5s ease;
      }
    }

    &:checked + .slider:before {
      transform: translate(40px, -50%);
    }
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: "";
      height: 30px;
      width: 30px;
      left: -10px;
      top: 50%;
      transform: translate(0, -50%);
      background-color: white;
      border: 5px solid #3498db;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      box-shadow: 0 0 5px 0 grey;
    }

    &:hover {
      cursor: pointer;
    }

    .moon {
      position: absolute;
      top: 50%;
      left: 12px;
      height: 15px;
      width: 15px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: transparent;
      box-shadow: inset -5px 0px 0px 0 yellow;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    .sun {
      position: absolute;
      top: 50%;
      right: 10px;
      height: 10px;
      width: 10px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: yellow;
      opacity: 1;
      transition: opacity 0.5s ease;
      box-shadow: 0 0 10px 5px yellow;
    }
  }
  .round {
    border-radius: 38px;
    &:before {
      border-radius: 50%;
    }
  }
`;

export default Switch;
