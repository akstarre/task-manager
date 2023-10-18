import React, { useState } from "react";
import styled from "styled-components";

const ToggleSwitchContainer = styled.div`
  h5 {
    margin: 0;
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ToggleSliderActive = styled(ToggleSlider)`
  background-color: ${(props) => (props.powerMode ? "#82D9B3" : "#e0e0e0")};

  ${ToggleInput}:checked + &::before {
    transform: translateX(26px);
  }
`;

export const PowerModeSwitch = ({ handlePowerMode, powerMode }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    handlePowerMode();
  };

  return (
    <ToggleSwitchContainer>
      <ToggleSwitch>
        <ToggleInput type="checkbox" onChange={handleToggle} />
        <ToggleSliderActive powerMode={powerMode} />
      </ToggleSwitch>
    </ToggleSwitchContainer>
  );
};
