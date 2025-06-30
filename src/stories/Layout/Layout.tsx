import React, { ReactComponentElement } from 'react';

import './layout.sass';

import { Header } from '../Header/Header';

interface LayoutProps {
  /**
   * Цветовая схема
   */
  colorSchema: 'mint' | 'orange';

  /**
   * Body
   */
  body?: ReactComponentElement<undefined>;

  /**
   * Footer
   */
  footer?: ReactComponentElement<undefined>;
}

export function Layout({ colorSchema, ...props }: LayoutProps) {
  return (
    <div className={[colorSchema, 'layout'].join(' ')}>
      <Header></Header> {props.body} {props.footer}
    </div>
  );
}
