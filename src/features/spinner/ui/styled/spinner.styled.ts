import styled from "styled-components";
import { calcFluid } from "@shared/lib/styles/fluid";

export const SpinnerRoot = styled.div`
  position: absolute;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 1600px) {
    scale: 0.8;
  }

  @media screen and (max-width: 1400px) {
    scale: 0.7;
  }

  @media screen and (max-width: 1024px) {
    scale: 0.65;
  }

  @media screen and (max-width: 769px) {
    scale: 1;
    bottom: ${calcFluid(57, 80)};
  }
`;

export const SpinnerContainer = styled.div`
  display: none;
  position: absolute;
  width: 530px;
  height: 530px;

  @media screen and (min-width: 769px) {
    display: block;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid rgba(66, 86, 122, 0.2);
    }
  }
`;

export const SpinnerInterval = styled.div`
  z-index: 5;

  &,
  span {
    font-size: ${calcFluid(100, 200)};
    font-weight: 700;
    line-height: ${calcFluid(120, 160)};
    letter-spacing: -0.02em;

    @media screen and (max-width: 769px) {
      font-size: ${calcFluid(56, 200)};
      line-height: ${calcFluid(72, 160)};
    }
  }
`;

export const SpinnerIntervalStart = styled.span`
  color: #5d5fef;
`;

export const SpinnerIntervalEnd = styled.span`
  color: #ef5da8;
`;
