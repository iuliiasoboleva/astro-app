import React from 'react';

import calendarUrl from '../../assets/icons/calendar-mini.svg';
import clockUrl from '../../assets/icons/clock-mini.svg';
import { BottomBlock, Card, CornerBadge, MetaItem, MetaRow, Pill, Title } from './styles';

export const CustomArchiveCard = ({
  title,
  bg,
  status = 'default', // 'default' | 'locked' | 'purchased'
  date, // '22 июля 2025 г.'
  time, // '18:45'
  pillText, // 'Расклад Таро' | 'Астрология'
  pillIcon, // иконка для плашки
  onClick,
}) => {
  const locked = status === 'locked';
  const purchased = status === 'purchased';

  return (
    <Card $bg={bg} $status={status} onClick={onClick} disabled={locked}>
      <Title $status={status}>{title}</Title>

      {/* дата + время */}
      <MetaRow>
        <MetaItem>
          <img src={calendarUrl} alt="" width={14} height={14} />
          <span>{date}</span>
        </MetaItem>
        <MetaItem>
          <img src={clockUrl} alt="" width={14} height={14} />
          <span>{time}</span>
        </MetaItem>
      </MetaRow>

      <BottomBlock>
        <Pill $status={status}>
          {pillIcon && <img src={pillIcon} alt="" width={14} height={14} />}
          {pillText}
        </Pill>

        <CornerBadge $status={status} $hidden={!locked && !purchased}></CornerBadge>
      </BottomBlock>
    </Card>
  );
};

export default CustomArchiveCard;
