import { Spinner } from "@features/spinner";
import { data, IntervalSliders } from "@shared/data/history-dates";
import { getWindowDimensions } from "@shared/model";
import { Slider } from "@widgets/interval-slider/ui/slider";
import {
  Content,
  IntervalSliderRoot,
  Title,
  TitleText,
  Wrapper,
} from "@widgets/interval-slider/ui/styled/interval-slider.styled";
import React from "react";
import { SwiperRef } from "swiper/react";

export const IntervalSlider = () => {
  const [intervalSliders] = React.useState<IntervalSliders>(data);

  const [intervalIndex, setIntervalIndex] = React.useState(0);
  const [intervalStart, setIntervalStart] = React.useState(
    intervalSliders[intervalIndex].interval.start,
  );
  const [intervalEnd, setIntervalEnd] = React.useState(
    intervalSliders[intervalIndex].interval.end,
  );
  const [sliderInAnim, setSliderInAnim] = React.useState(false);

  const [slides, setSlides] = React.useState(
    intervalSliders[intervalIndex].slides,
  );

  const [sliderTitle, setSliderTitle] = React.useState(
    intervalSliders[intervalIndex].name,
  );

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions(),
  );

  const sliderRef = React.useRef<SwiperRef | null>(null);

  /*
   *   Interval update logic
   */
  // переключение на следующий или предыдущий интервал
  const isFirstInterval = intervalIndex === 0;
  const isLastInterval = intervalIndex === intervalSliders.length - 1;
  const updateIntervalIndex = React.useCallback(
    (value: number) => {
      if (
        (value < 0 && intervalIndex === 0) ||
        (value > 0 && intervalIndex + 1 === intervalSliders.length)
      )
        return;

      setIntervalIndex(intervalIndex + value);
    },
    [intervalIndex, intervalSliders.length],
  );

  React.useEffect(() => {
    const start = intervalSliders[intervalIndex].interval.start;
    const end = intervalSliders[intervalIndex].interval.end;

    let prev_start = intervalStart;
    let prev_end = intervalEnd;

    const delayStart = 50 - 1000 * Math.abs(1 - prev_start / start);
    const delayEnd = 50 - 1000 * Math.abs(1 - prev_end / end);

    const intervalIdStart: ReturnType<typeof setInterval> = setInterval(() => {
      if (prev_start === start) return clearInterval(intervalIdStart);

      if (prev_start < start) {
        setIntervalStart(++prev_start);
      }
      if (prev_start > start) {
        setIntervalStart(--prev_start);
      }
    }, delayStart);

    const intervalIdEnd: ReturnType<typeof setInterval> = setInterval(() => {
      if (prev_end === end) return clearInterval(intervalIdEnd);

      if (prev_end < end) {
        setIntervalEnd(++prev_end);
      }
      if (prev_end > end) {
        setIntervalEnd(--prev_end);
      }
    }, delayEnd);
    return () => {
      clearInterval(intervalIdStart);
      clearInterval(intervalIdEnd);
    };
    // Only re-run when interval index changes; intervalStart/intervalEnd are read as initial values for animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalIndex]);

  return (
    <IntervalSliderRoot>
      <Content>
        <Title>
          <TitleText>
            Исторические
            <br />
            даты
          </TitleText>
        </Title>
        <Wrapper>
          <Spinner
            sliders={intervalSliders}
            setIntervalIndex={setIntervalIndex}
            intervalIndex={intervalIndex}
            setSliderInAnim={setSliderInAnim}
            intervalStart={intervalStart}
            intervalEnd={intervalEnd}
          />
        </Wrapper>
        {windowDimensions.width > 768 && (
          <Slider
            slides={slides}
            sliderTitle={sliderTitle}
            sliderInAnim={sliderInAnim}
            windowWidth={windowDimensions.width}
            sliderRef={sliderRef}
          />
        )}
      </Content>
    </IntervalSliderRoot>
  );
};
