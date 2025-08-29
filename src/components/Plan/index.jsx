import React from 'react';

import checkIcon from '../../assets/icons/check.svg';
import CustomButton from '../../ui/CustomButton';
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

const Plan = ({
  price,
  period,
  title,
  subtitle,
  features = [],
  badge,
  active = false,
  onSelect,
  buttonLabel,
  onClick,
  className,
}) => {
  return (
    <Wrapper className={className} $active={active} onClick={onSelect}>
      <HeaderRow>
        <div>
          <Price>{price}₽</Price>
          {period && <Period> / {period}</Period>}
        </div>
        {badge && <Badge $variant={badge.toLowerCase()}>{badge}</Badge>}
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
      {buttonLabel && <CustomButton onClick={onClick}>Приобрести</CustomButton>}
    </Wrapper>
  );
};

export default Plan;
