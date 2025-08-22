import React from 'react';

import cartUrl from '../../assets/icons/cart.svg';
import lockUrl from '../../assets/icons/lock.svg';
import { BottomBlock, Card, CornerBadge, Pill, Title } from './styles';

export const CustomCategoryCard = ({ title, bg, status = 'default', onClick, className }) => {
  const locked = status === 'locked';
  const purchased = status === 'purchased';

  const pillText = locked ? 'Заблокировано' : 'Перейти';

  return (
    <Card
      $bg={bg}
      $status={status}
      onClick={!locked ? onClick : undefined}
      disabled={locked}
      className={className}
      aria-disabled={locked}
    >
      <Title $status={status}>{title}</Title>
      <BottomBlock>
        <Pill $status={status}>{pillText}</Pill>

        <CornerBadge $status={status} $hidden={!locked && !purchased}>
          {locked && <img src={lockUrl} alt="" width={16} height={16} />}
          {purchased && <img src={cartUrl} alt="" width={16} height={16} />}
        </CornerBadge>
      </BottomBlock>
    </Card>
  );
};

export default CustomCategoryCard;
