import React from 'react';

import { Btn, Card, Text, Title } from './styles';

const HomeCard = ({ title, text, img, buttonText = 'Перейти', tone, onClick }) => (
  <Card $bg={img} $tone={tone} onClick={onClick}>
    <div>
      <Title $tone={tone}>{title}</Title>
      <Text $tone={tone}>{text}</Text>
    </div>
    <Btn $tone={tone} onClick={onClick}>
      {buttonText}
    </Btn>
  </Card>
);

export default HomeCard;
