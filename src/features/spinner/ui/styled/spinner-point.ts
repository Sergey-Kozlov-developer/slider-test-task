import styled from "styled-components";

interface PointContainerProps {
  $rotate: number;
}

interface PointWrapperProps {
  $rotate: number;
  $isActive: boolean;
}

interface PointIndexProps {
  $isActive: boolean;
}

interface PointTitleProps {
  $isActive: boolean;
}

export const PointContainer = styled.div<PointContainerProps>`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 101%;
  height: 101%;
  z-index: 10;
  transform: rotate(${({ $rotate }) => $rotate}deg);
`;

export const PointWrapper = styled.div<PointWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  top: -26px;
  transform: rotate(${({ $rotate }) => -$rotate}deg);
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.7)};
  transition: opacity 0.3s ease;
`;

export const PointIndex = styled.div<PointIndexProps>`
  position: relative;
  top: -2px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 50% 50%;
  height: ${({ $isActive }) => ($isActive ? "56px" : "9px")};
  width: ${({ $isActive }) => ($isActive ? "56px" : "9px")};
  background-color: ${({ $isActive }) =>
    $isActive ? "rgb(245, 246, 250)" : "rgba(66, 86, 122, 1)"};
  color: rgba(66, 86, 122, 1);
  border: 1px solid rgba(48, 62, 88, 0.5);
  border-radius: 50%;
  pointer-events: all;
  z-index: 11;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    width: 56px;
    height: 56px;
    background-color: rgb(245, 246, 250);
  }
`;

export const PointTitle = styled.div<PointTitleProps>`
  position: absolute;
  width: max-content;
  top: 10px;
  left: 70px;
  transform-origin: 0 50%;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: rgba(66, 86, 122, 1);
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
  pointer-events: none;
`;
