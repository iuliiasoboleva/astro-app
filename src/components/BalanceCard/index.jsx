import React from 'react';

import { Card, Header, Subtitle, Value } from './styles';

const BalanceCard = ({
  variant = 'tarot', // 'tarot' | 'astro' | 'refs'
  badge = 'БАЛАНС', // верхний мини-заголовок
  value = 0, // число
  subtitle = '',
  className,
  onClick,
}) => {
  return (
    <Card $variant={variant} className={className} onClick={onClick}>
      <Header>{badge}</Header>
      <Value>{value}</Value>
      <Subtitle>{subtitle}</Subtitle>
    </Card>
  );
};

export default BalanceCard;
