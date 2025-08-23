import React from 'react';
import { useLocation } from 'react-router-dom';

import { Bar, Icon, Item, Label } from './styles';

const CHILD_OF_HOME = ['/tarot'];

const BottomTabs = ({ items = [], className }) => {
  const { pathname } = useLocation();

  return (
    <Bar role="tablist" aria-label="Главное меню" className={className}>
      {items.map((it) => {
        const isHome = it.to === '/';
        const isChildOfHome =
          isHome && (pathname === '/' || CHILD_OF_HOME.some((p) => pathname.startsWith(p)));

        return (
          <Item
            key={it.to}
            to={it.to}
            end={it.to === '/'}
            aria-label={it.label}
            data-active={isChildOfHome ? 'true' : undefined}
          >
            <Icon $src={it.icon} aria-hidden />
            <Label>{it.label}</Label>
          </Item>
        );
      })}
    </Bar>
  );
};

export default BottomTabs;
