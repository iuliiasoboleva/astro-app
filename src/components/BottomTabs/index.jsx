import React from 'react';

import { Bar, Icon, Item, Label } from './styles';

const BottomTabs = ({ items = [], className }) => {
  return (
    <Bar role="tablist" aria-label="Главное меню" className={className}>
      {items.map((it) => (
        <Item key={it.to} to={it.to} end={it.to === '/'} aria-label={it.label}>
          <Icon $src={it.icon} aria-hidden />
          <Label>{it.label}</Label>
        </Item>
      ))}
    </Bar>
  );
};

export default BottomTabs;
