import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after, alt }) => {
  return (
    <ReactCompareSlider
      onlyHandleDraggable={true}
      itemOne={<ReactCompareSliderImage src={before} alt={`Before - ${alt}`} />}
      itemTwo={<ReactCompareSliderImage src={after} alt={`After - ${alt}`} />}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default BeforeAfterSlider;