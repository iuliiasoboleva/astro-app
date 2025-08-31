import React from 'react';
import { useNavigate } from 'react-router-dom';

import astroIcon from '../../assets/icons/astro-brown.svg';
import cardsIcon from '../../assets/icons/cards-blue.svg';
import heartIcon from '../../assets/icons/heart-purple.svg';
import fallbackAvatar from '../../assets/images/avatar.png';
import heartBlock from '../../assets/images/heart-block.png';
import moneyBlock from '../../assets/images/money-block.png';
import timeBlock from '../../assets/images/time-block.png';
import BalanceCard from '../../components/BalanceCard';
import useTelegramUser from '../../hooks/useTelegramUser';
import { BALANCE_CARDS } from '../../mocks/balanceInfo';
import CustomStatusUser from '../../ui/CustomStatusUser';
import {
  Avatar,
  BalanceGrid,
  Content,
  Grid,
  Hero,
  IconWrap,
  MainSubtitle,
  MainTitle,
  MainWrapper,
  Name,
  NameBlock,
  Nickname,
  Page,
  Pill,
  Promoblock,
  Tile,
  Title,
  TitleBlock,
} from './styles';

const items = [
  {
    id: 'sub',
    size: 's',
    title: 'Подписка на\nТаро и Астрологию',
    pill: 'от 1490₽',
    bg: timeBlock,
    icon: cardsIcon,
    colorTitle: '#437693',
    colorLabel: '#4F93C9',
  },
  {
    id: 'shop',
    size: 's',
    title: 'Магазин\nРаскладов',
    pill: 'от 990₽',
    bg: moneyBlock,
    icon: astroIcon,
    colorTitle: '#A86D61',
    colorLabel: '#9B7765',
  },
  {
    id: 'gift',
    size: 'l',
    title: 'Получить бесплатные\nрасклады Таро',
    pill: 'Подарок',
    bg: heartBlock,
    icon: heartIcon,
    colorTitle: '#7571BB',
    colorLabel: '#7A76C5',
  },
];

const Profile = () => {
  const navigate = useNavigate();
  const tgUser = useTelegramUser();

  const onTileClick = (item) => {
    if (item.id === 'sub') navigate('/subscription');
    if (item.id === 'shop') navigate('/shop');
    if (item.id === 'gift') navigate('/referral');
  };

  const nameToShow = tgUser?.name || 'Лиза Васина';
  const usernameToShow = tgUser?.username || '@liza';
  const avatarSrc = tgUser?.photoUrl || fallbackAvatar;

  const status = tgUser?.isPremium ? 'vip' : undefined;

  return (
    <Page>
      <Hero>
        <TitleBlock>
          <Name>астро-приложение • ЛИЗА ВАСИНА</Name>
          <MainTitle>Что скажут карты?</MainTitle>
        </TitleBlock>
        <Avatar src={avatarSrc} alt="" referrerPolicy="no-referrer" />
      </Hero>

      <MainWrapper>
        <NameBlock>
          <CustomStatusUser name={nameToShow} status={status} />
          <Nickname>{usernameToShow}</Nickname>
        </NameBlock>

        <BalanceGrid>
          {BALANCE_CARDS.map((it) => (
            <BalanceCard
              key={it.id}
              variant={it.variant}
              badge={it.badge}
              value={it.value}
              subtitle={it.subtitle}
            />
          ))}
        </BalanceGrid>

        <MainSubtitle>Получите бесплатный расклад</MainSubtitle>
        <Promoblock>
          <p>NEWYEAR2026</p>
          <button>Применить</button>
        </Promoblock>

        <Grid>
          {items.map((it) => (
            <Tile
              key={it.id}
              $size={it.size || 's'}
              $bgImage={it.bg}
              onClick={() => onTileClick(it)}
            >
              <Content>
                <Title $color={it.colorTitle}>{it.title}</Title>
                {!!it.icon && (
                  <IconWrap>
                    <img src={it.icon} alt="" />
                    <Pill $color={it.colorLabel}>{it.pill}</Pill>
                  </IconWrap>
                )}
              </Content>
            </Tile>
          ))}
        </Grid>
      </MainWrapper>
    </Page>
  );
};

export default Profile;
