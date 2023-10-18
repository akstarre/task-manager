import {
  RadialBarChart,
  RadialBar,
  Cell,
  ResponsiveContainer,
  PolarAngleAxis
} from "recharts";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  z-index: 0;
`;

const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 0.9rem;
  color: #333;
`;

export const ProgressRadial = ({ percentage }) => {
  const data = [{ value: percentage }];

  return (
    <ProgressBarContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            minAngle={15}
            label={false}
            fill="#3498db"
            clockWise
            background={{ fill: "#e0e0e0" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <PercentageText>{percentage}%</PercentageText>
    </ProgressBarContainer>
  );
};
