export interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  onChange: ({ min, max }: { min: number; max: number }) => void;
}
