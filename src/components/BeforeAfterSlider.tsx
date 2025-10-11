'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

const BeforeAfterSlider = ({ before, after, alt }: BeforeAfterSliderProps) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={before} alt={`Before - ${alt}`} />}
      itemTwo={<ReactCompareSliderImage src={after} alt={`After - ${alt}`} />}
      className="rounded-lg"
    />
  );
};

export default BeforeAfterSlider;