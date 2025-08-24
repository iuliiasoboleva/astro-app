import React from 'react';

import CustomButton from '../../ui/CustomButton';
import { IconBox, Subtitle, Title, Wrapper } from './styles';

const InfoCard = ({
  icon,
  title,
  subtitle,
  buttonLabel,
  variant = 'solid',
  onButtonClick,
  className,
}) => {
  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) return <IconBox>{icon}</IconBox>;
    return (
      <IconBox>
        <img src={icon} alt="" aria-hidden="true" />
      </IconBox>
    );
  };

  return (
    <Wrapper className={className}>
      {renderIcon()}
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {buttonLabel && (
        <CustomButton variant={variant} onClick={onButtonClick} style={{ marginTop: '5px' }}>
          {buttonLabel}
        </CustomButton>
      )}
    </Wrapper>
  );
};

export default InfoCard;
