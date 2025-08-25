import React from 'react';

import { IconBox, Label, Wrapper } from './styles';

const TagButton = ({ icon, label, onClick, className }) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      {icon && <IconBox>{React.isValidElement(icon) ? icon : <img src={icon} alt="" />}</IconBox>}
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default TagButton;
