import React from 'react';

import instagramIcon from '../../assets/icons/instagram.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import astroBg from '../../assets/images/astro-bg.png';
import tarotBg from '../../assets/images/taro-bg.png';
import HomeCard from '../../components/HomeCard';
import { Hero, Label, LabelBlock, MainTitle, Name, Page, SoftBlock, TitleBlock } from './styles';

const Home = () => (
  <Page>
    <Hero>
      <TitleBlock>
        <Name>Астро-приложение</Name>
        <MainTitle>Что скажут карты?</MainTitle>
      </TitleBlock>
      <LabelBlock>
        <Label>
          <img src={instagramIcon} alt="" />
          <p>lizavasinaa</p>
        </Label>
        <Label>
          <img src={telegramIcon} alt="" />
          <p>myastrologer</p>
        </Label>
      </LabelBlock>
    </Hero>
    <SoftBlock>
      <HomeCard
        title="Расклад Таро"
        text={'Его мысли, чувства,\n действия. Узнай будущее\n или получи совет от карт.'}
        img={tarotBg}
        tone="blue"
      />
      <HomeCard
        title="Астрология"
        text={'Совместимость, разбор\n мужчины, карьеры и финансов\n — всё по дате рождения.'}
        img={astroBg}
        tone="peach"
      />
    </SoftBlock>
  </Page>
);

export default Home;
