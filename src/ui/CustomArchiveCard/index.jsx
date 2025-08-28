import React from 'react';

import calendarUrl from '../../assets/icons/calendar-mini.svg';
import clockUrl from '../../assets/icons/clock-mini.svg';
import { BottomBlock, Card, MetaItem, MetaRow, Pill, Title } from './styles';

export const CustomArchiveCard = ({
  title,
  bg,
  date, // '22 июля 2025 г.'
  time, // '18:45'
  pillText, // 'Расклад Таро' | 'Астрология'
  pillIcon, // иконка для плашки
  onClick,
}) => {
  return (
    <Card $bg={bg} onClick={onClick}>
      <Title>{title}</Title>

      {/* дата + время */}
      <MetaRow>
        <MetaItem>
          <img src={calendarUrl} alt="" />
          <span>{date}</span>
        </MetaItem>
        <MetaItem>
          <img src={clockUrl} alt="" />
          <span>{time}</span>
        </MetaItem>
      </MetaRow>

      <BottomBlock>
        <Pill>
          {pillIcon && <img src={pillIcon} alt="" />}
          {pillText}
        </Pill>
      </BottomBlock>
    </Card>
  );
};

export default CustomArchiveCard;
