import React, { ReactComponentElement } from 'react';

import './layout.sass';

import { Header } from '../Header/Header';
import { ButtonModeType } from 'src/stories/Button/Button';

interface LayoutProps {
  /**
   * Цветовая схема
   */
  colorSchema: Omit<ButtonModeType, 'teal'>;

  /**
   * Body
   */
  body: ReactComponentElement<undefined>;

  /**
   * Footer
   */
  footer: ReactComponentElement<undefined>;
}

export function Layout({ colorSchema, ...props }: LayoutProps) {
  return (
    <div className={[colorSchema, 'layout'].join(' ')}>
      <Header></Header> {props.body} {props.footer}
    </div>
  );
}
