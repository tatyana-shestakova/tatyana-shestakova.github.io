import React from 'react';

import './layout.sass';

import { Header } from '../Header/Header';
import { ModeType } from 'src/components/Button/Button';

interface LayoutProps {
  /**
   * Цветовая схема
   */
  colorSchema?: Omit<ModeType, 'teal'>;

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
      <Header /> {props.body} {props.footer}
    </div>
  );
}
