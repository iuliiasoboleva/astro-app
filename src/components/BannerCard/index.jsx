import React from 'react';

import { Button, CloseBtn, ModalWrapper, Overlay, Text, Title, Wrapper } from './styles';

const BannerCard = ({ title, text, cta, bg, styles, onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper>
        <Wrapper $bg={bg}>
          <CloseBtn onClick={onClose} $color={styles.crossColor}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 3.5L3.5 10.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 3.5L10.5 10.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CloseBtn>

          <Title $color={styles.titleColor}>{title}</Title>
          <Text $color={styles.textColor}>{text}</Text>
          <Button $color={styles.buttonColor}>{cta}</Button>
        </Wrapper>
      </ModalWrapper>
    </>
  );
};

export default BannerCard;
