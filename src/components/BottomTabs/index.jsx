import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { resetAstroForm } from '../../store/astroStepsSlice';
import { resetSession } from '../../store/tarotSessionSlice';
import { Bar, Icon, Item, Label } from './styles';

const CHILD_OF_HOME = ['/tarot', '/astro'];

const BottomTabs = ({ items = [], className }) => {
  const location = useLocation();
  const { pathname, state } = location;
  const fromArchive = !!state?.fromArchive;

  const dispatch = useDispatch();
  const { picked = [], question = '', status = 'idle' } = useSelector((s) => s.tarotSession || {});
  const astroForm = useSelector((s) => s.astroSteps?.form || {});
  const { gender, birthDate, birthTime, birthPlace, name } = astroForm;

  const hasActiveSession =
    (Array.isArray(picked) && picked.length > 0) ||
    (typeof question === 'string' && question.trim().length > 0) ||
    (status !== 'idle' && status !== 'done' && status !== 'error');

  const hasAstroData =
    gender === 'm' ||
    gender === 'f' ||
    !!birthDate ||
    !!birthTime ||
    (birthPlace && birthPlace.trim().length > 0) ||
    (name && name.trim().length > 0);

  const forceArchiveActive =
    fromArchive && (pathname.startsWith('/tarot') || pathname.startsWith('/astro'));

  return (
    <Bar role="tablist" aria-label="Главное меню" className={className}>
      {items.map((it) => {
        const isHome = it.to === '/';
        const isArchiveTab = it.to === '/archive';

        const isChildOfHome =
          !forceArchiveActive &&
          isHome &&
          (pathname === '/' || CHILD_OF_HOME.some((p) => pathname.startsWith(p)));

        const forceActive = (isHome && isChildOfHome) || (isArchiveTab && forceArchiveActive);

        return (
          <Item
            key={it.to}
            to={it.to}
            end={it.to === '/'}
            aria-label={it.label}
            data-active={forceActive ? 'true' : undefined}
            onClick={() => {
              if (hasActiveSession) dispatch(resetSession());
              if (hasAstroData) dispatch(resetAstroForm());
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
