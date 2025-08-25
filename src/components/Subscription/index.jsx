import React from 'react';

import checkIcon from '../../assets/icons/check.svg';
import {
  Badge,
  FeatureItem,
  Features,
  HeaderRow,
  Period,
  Price,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

const Subscription = ({
  price,
  period,
  title,
  subtitle,
  features = [],
  badge,
  active = false,
  onSelect,
  className,
}) => {
  return (
    <Wrapper className={className} $active={active} onClick={onSelect}>
      <HeaderRow>
        <div>
          <Price>{price}₽</Price>
          {period && <Period> / {period}</Period>}
        </div>
        {badge && <Badge>{badge}</Badge>}
      </HeaderRow>

      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}

      {features.length > 0 && (
        <Features>
          {features.map((f, idx) => (
            <FeatureItem key={idx}>
              <img src={checkIcon} alt="" /> {f}
            </FeatureItem>
          ))}
        </Features>
      )}
    </Wrapper>
  );
};

export default Subscription;
