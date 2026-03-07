import styled from "styled-components";
import { calcFluid } from "@shared/lib/styles/fluid";

export const IntervalSliderRoot = styled.div`
  background-color: #f4f5f9;
  padding: 0 ${calcFluid(20, 160)} 0 ${calcFluid(20, 320)};
`;

export const Content = styled.div`
  position: relative;
  padding-bottom: ${calcFluid(13, 100)};
  color: rgba(66, 86, 122, 1);
  user-select: none;

  @media screen and (min-width: 769px) {
    border-right: 1px solid rgba(66, 86, 122, 0.1);
    border-left: 1px solid rgba(66, 86, 122, 0.1);

    &::before {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      background: rgba(66, 86, 122, 1);
      opacity: 0.1;
      width: 1px;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

export const Title = styled.div`
  width: min-content;
  padding-top: ${calcFluid(59, 100)};
  margin-bottom: ${calcFluid(146, 176)};
`;

export const TitleText = styled.div`
  position: relative;
  font-size: ${calcFluid(20, 56)};
  font-weight: 700;
  line-height: ${calcFluid(24, 68)};

  @media screen and (min-width: 769px) {
    padding-left: ${calcFluid(0, 80)};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background: linear-gradient(180deg, #5d5fef, #ef5da8);
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  pointer-events: none;
  margin-bottom: ${calcFluid(100, 217)};

  @media screen and (max-width: 769px) {
    margin-bottom: ${calcFluid(217, 230)};
  }

  &::after {
    position: absolute;
    width: 100%;
    height: 1px;

    @media screen and (min-width: 769px) {
      content: "";
      position: absolute;
      background: rgba(66, 86, 122, 1);
      opacity: 0.1;
    }
  }
`;
