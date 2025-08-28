import React, { FC, useLayoutEffect, useReducer, useRef } from 'react';
import cn from 'clsx';
import s from './Collapse.module.sass';

export type CollapseProps = {
  className?: string;
  children: React.ReactNode;
  opened: boolean;
};

export type CollapseState = {
  opened: boolean;
  mounted: boolean;
};

enum CollapseActionType {
  open,
  close,
  unmount,
  mount,
}

export const reducer = (state: CollapseState, action: CollapseActionType) => {
  switch (action) {
    case CollapseActionType.close:
      return { ...state, opened: false };

    case CollapseActionType.unmount:
      return { mounted: false, opened: false };

    case CollapseActionType.mount:
      return { ...state, mounted: true };

    case CollapseActionType.open:
      return { mounted: true, opened: true };
  }
};

export const Collapse: FC<CollapseProps> = ({ className, opened, children }) => {
  const [state, dispatch] = useReducer(reducer, { opened: false, mounted: false });
  const root = useRef<HTMLDivElement>();
  const wrapper = useRef<HTMLDivElement>();

  const onTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    if (state.opened) return;
    dispatch(CollapseActionType.unmount);
    root.current.style.height = '0';
  };

  useLayoutEffect(() => {
    if (opened) {
      root.current.style.height = 'auto';
      dispatch(CollapseActionType.mount);
      setTimeout(() => dispatch(CollapseActionType.open), 1);
    } else {
      dispatch(CollapseActionType.close);
    }
  }, [opened]);

  return (
    <div ref={root} className={cn(s.root, className)}>
      {state.mounted && (
        <div
          ref={wrapper}
          onTransitionEnd={onTransitionEnd}
          className={cn(s.wrapper, state.opened && s.opened, 'Collapse__wrapper')}
        >
          {children}
        </div>
      )}
    </div>
  );
};
