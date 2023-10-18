import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 50px;
`;

const ProgressBarDiv = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0; //
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7.5px;

  h3 {
    margin: 0;
  }
`;

const Progress = styled.h3`
  color: #3498db;
  margin: 5;
  height: 20px;
`;

const FilledProgress = styled.div`
  height: 100%;
  width: ${(props) => props.percentage || "0%"};
  background-color: #3498db;
  border-radius: 10px 0 0 10px;
  transition: width 0.3s ease-in-out;
`;

export const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarHeader>
        <h3>Task Completed</h3>
        <Progress>{percentage}%</Progress>
      </ProgressBarHeader>
      <ProgressBarDiv>
        <FilledProgress percentage={`${percentage}%`} />
      </ProgressBarDiv>
    </ProgressBarContainer>
  );
};
