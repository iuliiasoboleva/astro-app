import React from 'react';

import { Bar, Icon, Item, Label } from './styles';

const BottomTabs = ({ items = [], value, onChange, className }) => {
  return (
    <Bar role="tablist" aria-label="Главное меню" className={className}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <Item
            key={it.value}
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            $active={active}
            onClick={() => onChange?.(it.value)}
          >
            <Icon $src={it.icon} $active={active} aria-hidden />
            <Label $active={active}>{it.label}</Label>
          </Item>
        );
      })}
    </Bar>
  );
};

export default BottomTabs;
