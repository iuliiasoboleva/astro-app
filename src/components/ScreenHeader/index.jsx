import React from 'react';

import arrowBack from '../../assets/icons/arrow-back.svg';
import TagButton from '../../components/TagButton';
import { Page, SoftBlock, TitleBlock, TopTitle } from './styles';

const ScreenScaffold = ({
  onBack,
  topTitle,
  tagIcon,
  tagLabel,
  backIcon = arrowBack,
  children,
}) => {
  return (
    <Page>
      <TitleBlock>
        <img src={backIcon} alt="Назад" onClick={onBack} style={{ cursor: 'pointer' }} />
        <TopTitle>{topTitle}</TopTitle>
      </TitleBlock>

      <SoftBlock>
        {tagIcon && tagLabel ? <TagButton icon={tagIcon} label={tagLabel} /> : null}
        {children}
      </SoftBlock>
    </Page>
  );
};

export default ScreenScaffold;
