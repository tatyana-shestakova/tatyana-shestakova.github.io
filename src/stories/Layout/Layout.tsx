import React from 'react';

import './layout.sass';

import { SwitchLanguage } from '../Header/Header';
import { ButtonModeType } from 'src/stories/Button/Button';

interface LayoutProps {
  /**
   * Цветовая схема
   */
  colorSchema?: Omit<ButtonModeType, 'teal'>;

  /**
   * Body
   */
  body?: React.ReactNode;

  /**
   * Footer
   */
  footer?: React.ReactNode;
}

export function Layout({ colorSchema, ...props }: LayoutProps) {
  return (
    <div className={[colorSchema, 'layout'].join(' ')}>
      <SwitchLanguage /> {props.body} {props.footer}
    </div>
  );
}
