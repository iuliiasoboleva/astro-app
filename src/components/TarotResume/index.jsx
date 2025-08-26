import React from 'react';

import { BackgroundImage, Image, Subtitle, Tag, Title, Wrapper } from './styles';

const TarotResume = ({ image, label, title, subtitle }) => {
  return (
    <Wrapper>
      <BackgroundImage>
        <Image $img={image} />
        <Tag>
          Карта:<span>{label}</span>
        </Tag>
      </BackgroundImage>

      <Title>{title}:</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default TarotResume;
