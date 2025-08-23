import React from 'react';

import { Btn, Card, Text, Title } from './styles';

const HomeCard = ({ title, text, img, buttonText = 'Перейти', tone }) => (
  <Card $bg={img} $tone={tone}>
    <div>
      <Title $tone={tone}>{title}</Title>
      <Text $tone={tone}>{text}</Text>
    </div>
    <Btn $tone={tone}>{buttonText}</Btn>
  </Card>
);

export default HomeCard;
