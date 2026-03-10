import {
  PointContainer,
  PointWrapper,
  PointIndex,
  PointTitle,
} from "@features/spinner/ui/styled/spinner-point";
import React from "react";

interface SpinnerPointProps {
  isActive: boolean;
  pointsCount: number;
  pointNumber: number;
  pointTitle: string;
  pointAngle: number;

  handleClick: (arg1: number, arg2: number) => void;
}

export const SpinnerPoint = React.memo(
  ({
    isActive,
    pointsCount,
    pointNumber,
    pointTitle,
    pointAngle,
    handleClick,
  }: SpinnerPointProps) => {
    const currentAngle = React.useMemo(
      () => (360 / pointsCount) * pointNumber - pointAngle,
      [pointsCount, pointNumber, pointAngle],
    );
    const [rotate, setRotate] = React.useState(currentAngle);

    const onClickHandler = React.useCallback(() => {
      handleClick(pointNumber, currentAngle);
    }, [pointNumber, currentAngle, handleClick]);

    React.useEffect(() => {
      setRotate(currentAngle);
    }, [currentAngle]);

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
  },
);
