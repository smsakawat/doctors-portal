import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
import React from "react";

const CustomButtonRoot = styled("span")`
  background: linear-gradient(to right, #19d3ae 0%, #0fcfec 100%);
  text-transform: uppercase;
  padding: 15px 20px;
  color: #fff;
  font-weight: 700;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  display: inline-block;
  margin-top: 2rem;

  &:hover {
    background: linear-gradient(to left, #19d3ae 0%, #0fcfec 100%);
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const MuiButton = ({ children }) => {
  return (
    <div>
      <CustomButton>{children}</CustomButton>
    </div>
  );
};

export default MuiButton;
