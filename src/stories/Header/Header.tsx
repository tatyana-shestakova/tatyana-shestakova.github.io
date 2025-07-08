import React from 'react';

import './header.sass';
import { Logo } from '../Logo/Logo';

type ItemNavType = {
  label: string;
  arrows?: boolean;
};

interface HeaderProps {
  /**
   * Навигация
   */
  nav?: ItemNavType[];
}

export function Header({ ...props }: HeaderProps) {
  const nav =
    props.nav && props.nav.length ? (
      <div className="nav">
        {props.nav.map((item: ItemNavType, index: number) => (
          <li key={index}>
            {item.arrows}
            {item.label}
          </li>
        ))}
      </div>
    ) : null;

  return (
    <div className="header">
      {nav}
      <div className="logo">
        <Logo></Logo>
      </div>
    </div>
  );
}
