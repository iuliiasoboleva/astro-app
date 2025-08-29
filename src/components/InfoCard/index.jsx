import React from 'react';

import rubleIcon from '../../assets/icons/currency-coin-rubel.svg';
import CustomButton from '../../ui/CustomButton';
import { ButtonBlock, IconBox, Price, Subtitle, Title, TitleBlock, Wrapper } from './styles';

const InfoCard = ({
  icon,
  title,
  subtitle,
  buttonLabel,
  cancelLabel,
  variant = 'solid',
  onButtonClick,
  priceInfo,
  onCancelClick,
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
      <TitleBlock>
        {title && <Title>{title}</Title>}
        {priceInfo && (
          <Price>
            <img src={rubleIcon} />
            Стоимость: {priceInfo}₽
          </Price>
        )}
      </TitleBlock>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <ButtonBlock>
        {buttonLabel && (
          <CustomButton variant={variant} onClick={onButtonClick} style={{ marginTop: '5px' }}>
            {buttonLabel}
          </CustomButton>
        )}
        {cancelLabel && (
          <CustomButton variant={'cancel'} onClick={onCancelClick}>
            {cancelLabel}
          </CustomButton>
        )}
      </ButtonBlock>
    </Wrapper>
  );
};

export default InfoCard;
