import { ComponentProps, FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";

interface ICircleTimerProps extends ComponentProps<"svg"> {
  duration: number;
  loop: boolean;
  fillColor: string;
  trackColor: string;
  size: number;
  strokeWidth: number;
}

const CircleTimer: FunctionComponent<ICircleTimerProps> = ({
  duration,
  fillColor,
  loop,
  size,
  strokeWidth,
  trackColor
}) => {
  const sizeWithStroke = size + strokeWidth;
  const center = size / 2 + strokeWidth / 2;
  const radius = size / 2;

  const circleFill = ({ r }: {r: number}) => keyframes`
  0% {
    stroke-dashoffset: ${2 * Math.PI * r}};
  }
  100% {
    stroke-dashoffset: 0;
  }
`;
  
const AnimatedCircle = styled.circle<any>`
  stroke-dasharray: ${({ r }) => 2 * Math.PI * r};
  animation: ${circleFill} ${({ duration }) => `${duration}s`} linear;
  animation-fill-mode: forwards;
  animation-iteration-count: ${({ loop }) => (loop ? "infinite" : 1)};
`;

  return (
    <svg
      width={`${sizeWithStroke}px`}
      height={`${sizeWithStroke}px`}
      viewBox={`0 0 ${sizeWithStroke} ${sizeWithStroke}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="none" stroke="none">
        <circle
          className="circle_track"
          cx={center}
          cy={center}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <AnimatedCircle
          className="circle_fill"
          cx={center}
          cy={center}
          duration={duration}
          loop={loop}
          r={radius}
          stroke={fillColor}
          strokeWidth={strokeWidth}
          transform={`rotate(-90, ${sizeWithStroke / 2}, ${sizeWithStroke /
            2})`}
        />
      </g>
    </svg>
  );
};

export default CircleTimer;