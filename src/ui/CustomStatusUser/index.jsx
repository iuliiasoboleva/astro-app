import React from 'react';

import { Badge, Name, Row } from './styles';

export const CustomStatusUser = ({
  name,
  status = 'free',
  badgeUppercase = true,
  className,
  ...rest
}) => {
  return (
    <Row className={className} {...rest}>
      <Name>{name}</Name>
      <Badge $variant={status} $uppercase={badgeUppercase}>
        {status}
      </Badge>
    </Row>
  );
};

export default CustomStatusUser;
