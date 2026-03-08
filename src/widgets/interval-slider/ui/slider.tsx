import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Arrow from "@assets/arrow.svg";

import type { IntervalSliders } from "@shared/data/history-dates";
import {
  Slide,
  SlideText,
  SlideTitle,
  SliderArrow,
  SliderContainer,
  SliderRoot,
  SliderTitle,
} from "./styled/slider.styled";

type Slide = IntervalSliders[number]["slides"][number];

export type SliderProps = {
  slides: Slide[];
  sliderTitle: string;
  sliderInAnim: boolean;
  windowWidth: number;
  sliderRef: React.RefObject<SwiperRef | null>;
};

export const Slider: React.FunctionComponent<SliderProps> = ({
  slides,
  sliderTitle,
  sliderInAnim,
  windowWidth,
  sliderRef,
}) => {
  return (
    <SliderRoot $isHidden={sliderInAnim}>
      {windowWidth <= 768 && <SliderTitle>{sliderTitle}</SliderTitle>}

      <SliderContainer>
        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={80}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          grabCursor={windowWidth > 768}
          freeMode={windowWidth <= 768}
          navigation={{
            prevEl: ".slider-arrow-prev",
            nextEl: ".slider-arrow-next",
          }}
          pagination={{
            el: ".slider-pagination",
            type: "bullets",
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <Slide>
                <SlideTitle>{slide.name}</SlideTitle>
                <SlideText>{slide.description}</SlideText>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderArrow $direction="prev" className="slider-arrow-prev">
          <Arrow />
        </SliderArrow>

        <SliderArrow $direction="next" className="slider-arrow-next">
          <Arrow />
        </SliderArrow>
      </SliderContainer>
    </SliderRoot>
  );
};
