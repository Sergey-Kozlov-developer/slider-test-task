import {
  PointContainer,
  PointWrapper,
  PointIndex,
  PointTitle,
} from "@features/spinner/ui/styled/spinner-point";
import React, { useState } from "react";

interface SpinnerPointProps {
  isActive: boolean;
  pointsCount: number;
  pointNumber: number;
  pointTitle: string;
  pointAngle: number;

  handleClick: (arg1: number, arg2: number) => void;
}

export const SpinnerPoint = ({
  isActive,
  pointsCount,
  pointNumber,
  pointTitle,
  pointAngle,
  handleClick,
}: SpinnerPointProps) => {
  const [rotate, setRotate] = useState(
    (360 / pointsCount) * pointNumber - pointAngle,
  );
  const onClickHandler = () => {
    handleClick(pointNumber, (360 / pointsCount) * pointNumber - pointAngle);
  };

  React.useEffect(() => {
    setRotate((360 / pointsCount) * pointNumber - pointAngle);
  }, [pointsCount, pointNumber, pointAngle]);

  return (
    <PointContainer $rotate={rotate}>
      <PointWrapper $rotate={rotate} $isActive={isActive}>
        <PointIndex $isActive={isActive} onClick={onClickHandler}>
          {pointNumber}
        </PointIndex>
        <PointTitle $isActive={isActive}>{pointTitle}</PointTitle>
      </PointWrapper>
    </PointContainer>
  );
};
