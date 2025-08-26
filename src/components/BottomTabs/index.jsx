import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetSession } from '../../store/tarotSessionSlice';

import { Bar, Icon, Item, Label } from './styles';

const CHILD_OF_HOME = ['/tarot'];

const BottomTabs = ({ items = [], className }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { picked = [], question = '', status = 'idle' } =
    useSelector((s) => s.tarotSession || {});

  const hasActiveSession =
    (Array.isArray(picked) && picked.length > 0) ||
    (typeof question === 'string' && question.trim().length > 0) ||
    (status !== 'idle' && status !== 'done' && status !== 'error');

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
            onClick={() => {
              if (hasActiveSession) dispatch(resetSession());
            }}
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
