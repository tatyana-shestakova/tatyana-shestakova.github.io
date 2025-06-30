import React, { ReactComponentElement } from 'react';

import './header.sass';
import { Logo } from '../Logo/Logo';

interface HeaderProps {
  /**
   * Навигация
   */
  nav?: ReactComponentElement<undefined>;
}

export function Header({ ...props }: HeaderProps) {
  return (
    <div className="header">
      <div className="nav">{props.nav}</div>
      <div className="logo">
        <Logo></Logo>
      </div>
    </div>
  );
}
