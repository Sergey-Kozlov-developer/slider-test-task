import styled from "styled-components";
import { calcFluid } from "@shared/lib/styles/fluid";

interface SliderRootProps {
  $isHidden: boolean;
}

export const SliderRoot = styled.div<SliderRootProps>`
  pointer-events: all;
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 ${calcFluid(0, 160)} 0 ${calcFluid(0, 80)};
  transform: translateY(${({ $isHidden }) => ($isHidden ? "5px" : "0")});
  opacity: ${({ $isHidden }) => ($isHidden ? 0 : 1)};
  transition: all 0.1s ease-in-out;

  @media screen and (max-width: 769px) {
    position: absolute;
    top: ${calcFluid(20, 60)};
    flex-direction: column;
    padding: 0;
  }
`;

export const SliderTitle = styled.div`
  @media screen and (max-width: 769px) {
    font-size: ${calcFluid(16, 25)};
    font-weight: 700;
    line-height: ${calcFluid(20, 30)};
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(199, 205, 217, 1);
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
`;

export const SliderArrow = styled.div<{ $direction: "prev" | "next" }>`
  position: absolute;
  z-index: 10;
  bottom: 50%;
  left: ${({ $direction }) =>
    $direction === "prev" ? calcFluid(0, 20) : "auto"};
  right: ${({ $direction }) =>
    $direction === "next" ? calcFluid(10, 40) : "auto"};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 15px 0px rgba(56, 119, 238, 0.1);
  border-radius: 50%;
  opacity: 1;
  background-color: #fff;
  transition: opacity 0.1s ease-in-out;
  transform: ${({ $direction }) =>
    $direction === "next" ? "rotate(180deg)" : "none"};
  cursor: pointer;

  @media screen and (max-width: 1300px) {
    left: ${({ $direction }) => ($direction === "prev" ? 0 : "auto")};
  }

  svg {
    stroke: rgba(56, 119, 238, 1);
  }

  &.swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 135px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const SlideTitle = styled.div`
  font-family: "Bebas Neue";
  font-size: ${calcFluid(16, 25)};
  line-height: ${calcFluid(20, 30)};
  color: rgba(56, 119, 238, 1);
  width: fit-content;
`;

export const SlideText = styled.div`
  font-size: ${calcFluid(14, 20)};
  line-height: ${calcFluid(20, 30)};
  width: fit-content;
`;
