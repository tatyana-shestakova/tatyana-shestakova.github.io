import type { RangeSliderProps } from './RangeSlider.types';
import React, { type ChangeEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import './RangeSlider.sass';

export function RangeSlider({ min, max, step, onChange }: RangeSliderProps) {
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  useEffect(() => {
    if (min >= max) {
      console.error('RangeSlider: min must be less than max');
    }
    if (step <= 0) {
      console.error('RangeSlider: step must be greater than 0');
    }
  }, [min, max, step]);

  useLayoutEffect(() => {
    if (!range.current) return;
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);
    range.current.style.left = `${minPercent}%`;
    range.current.style.width = `${maxPercent - minPercent}%`;
  }, [minValue, maxValue, getPercent]);

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxValue - step);
    setMinValue(value);
    onChange({ min: value, max: maxValue });
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minValue + step);
    setMaxValue(value);
    onChange({ min: minValue, max: value });
  };

  const handleMinNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = +event.target.value;
    value = Math.min(value, maxValue - step);
    value = Math.max(value, min);
    setMinValue(value);
    onChange({ min: value, max: maxValue });
  };

  const handleMaxNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = +event.target.value;
    value = Math.max(value, minValue + step);
    value = Math.min(value, max);
    setMaxValue(value);
    onChange({ min: minValue, max: value });
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          className="thumb"
          value={minValue}
          onChange={handleMinChange}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          className="thumb"
          value={maxValue}
          onChange={handleMaxChange}
        />

        <div className="slider">
          <div>
            <div className="slider__track"></div>
            <div ref={range} className="slider__range"></div>
          </div>
        </div>
      </div>
      <div className="values">
        <input
          type="number"
          value={minValue}
          step={step}
          min={min}
          max={maxValue - step}
          onChange={handleMinNumberChange}
        />
        <input
          type="number"
          value={maxValue}
          step={step}
          min={minValue + step}
          max={max}
          onChange={handleMaxNumberChange}
        />
      </div>
    </div>
  );
}
