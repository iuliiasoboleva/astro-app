import React from 'react';

import arrowBack from '../../assets/icons/arrow-back.svg';
import clockIcon from '../../assets/icons/story-clock.svg';
import TagButton from '../../components/TagButton';
import { Page, SoftBlock, TagBlock, TitleBlock, TopTitle } from './styles';

const ScreenScaffold = ({
  onBack,
  topTitle,
  tagIcon,
  tagLabel,
  backIcon = arrowBack,
  fromArchive,
  date,
  children,
}) => {
  return (
    <Page>
      <TitleBlock>
        <img src={backIcon} alt="Назад" onClick={onBack} style={{ cursor: 'pointer' }} />
        <TopTitle>{topTitle}</TopTitle>
      </TitleBlock>

      <SoftBlock>
        <TagBlock>
          {tagIcon && tagLabel ? <TagButton icon={tagIcon} label={tagLabel} /> : null}
          {fromArchive && date ? <TagButton icon={clockIcon} label={date} /> : null}
        </TagBlock>
        {children}
      </SoftBlock>
    </Page>
  );
};

export default ScreenScaffold;
