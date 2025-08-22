import React from 'react';

import { Icon, Label, Spinner, StyledButton } from './styles';

export const CustomButton = ({
  children,
  variant = 'solid',
  size = 'lg',
  block = true,
  loading = false,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $block={block}
      disabled={loading || rest.disabled}
      aria-busy={loading}
      {...rest}
    >
      {loading ? (
        <Spinner aria-label="Загрузка" role="progressbar" />
      ) : (
        <>
          {leftIcon && <Icon>{leftIcon}</Icon>}
          <Label>{children}</Label>
          {rightIcon && <Icon>{rightIcon}</Icon>}
        </>
      )}
    </StyledButton>
  );
};

export default CustomButton;
