import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import copyIcon from '../../assets/icons/copy.svg';
import shareIcon from '../../assets/icons/share.svg';
import igBg from '../../assets/images/instagram.png';
import rubleIcon from '../../assets/images/ruble-circle.png';
import tgBg from '../../assets/images/telegram.png';
import { plural } from '../../helpers/pluralEndWords';
import { MOCK_INVITES, REF_CODE } from '../../mocks/invites';
import CustomButton from '../../ui/CustomButton';
import { openExternal } from '../../utils/telegram';
import {
  ActionBtn,
  BottomCard,
  BottomCards,
  BottomTitle,
  Card,
  Code,
  Content,
  Divider,
  Image,
  InviteRow,
  Label,
  ListHeader,
  Page,
  PromoBox,
  PromoRow,
  Reward,
  SoftBlock,
  Subnote,
  Text,
  Title,
  TitleBlock,
  TitleWrapper,
  TopTitle,
} from './styles';

const Referral = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleInvites = useMemo(
    () => (showAll ? MOCK_INVITES : MOCK_INVITES.slice(0, 4)),
    [showAll],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(REF_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = REF_CODE;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToTelegram = () => {
    const url = 'https://t.me/share/url';
    const text = `Мой промокод для бесплатного расклада: ${REF_CODE}`;
    const target = `${url}?url=${encodeURIComponent('')}&text=${encodeURIComponent(text)}`;

    if (window?.Telegram?.WebApp?.openTelegramLink) {
      window.Telegram.WebApp.openTelegramLink(target);
      return;
    }
    window.open(target, '_blank', 'noopener,noreferrer');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Page>
      <TitleBlock>
        <img src={arrowBack} alt="Назад" onClick={handleBack} style={{ cursor: 'pointer' }} />
        <TopTitle>Бесплатные расклады</TopTitle>
      </TitleBlock>

      <SoftBlock>
        <TitleWrapper>
          <Image src={rubleIcon} alt="" />
          <Text>
            Приглашайте друзей в «Что скажут карты?» — друзьям первый бесплатный расклад в подарок,
            а вам 1 расклад за каждого друга.
          </Text>
        </TitleWrapper>

        {/* Блок промокода */}
        <Card>
          <Label>Ваш реферальный промокод</Label>
          <PromoRow>
            <PromoBox $copied={copied}>
              <Code>{REF_CODE}</Code>
              <img
                onClick={handleCopy}
                aria-label="Скопировать промокод"
                src={copyIcon}
                alt=""
                width={14}
                height={14}
                style={{ cursor: 'pointer' }}
              />
            </PromoBox>
          </PromoRow>

          <CustomButton leftIcon={<img src={shareIcon} alt="" />} onClick={shareToTelegram}>
            Поделиться промокодом
          </CustomButton>
        </Card>

        <Card>
          <ListHeader>
            Уже приглашено {MOCK_INVITES.length}{' '}
            {plural(MOCK_INVITES.length, ['друг', 'друга', 'друзей'])}
          </ListHeader>
          <Subnote>
            Вы получили {MOCK_INVITES.length}{' '}
            {plural(MOCK_INVITES.length, ['расклад', 'расклада', 'раскладов'])}
          </Subnote>

          {visibleInvites.map((it, i) => (
            <React.Fragment key={`${it.username}-${i}`}>
              <InviteRow>
                <div className="user">{it.username}</div>
                <div className="date">{it.date}</div>
              </InviteRow>
              {i !== visibleInvites.length - 1 && <Divider />}
            </React.Fragment>
          ))}

          <CustomButton
            onClick={() => setShowAll(true)}
            disabled={showAll}
            aria-disabled={showAll}
            style={{ marginTop: '20px' }}
          >
            {showAll ? 'Все приглашения уже показаны' : 'Смотреть все приглашения'}
          </CustomButton>
        </Card>

        <BottomTitle>
          Выполняйте задания
          <br />и получайте бесплатные расклады!
        </BottomTitle>

        <BottomCards>
          <BottomCard
            $bg={tgBg}
            $borderColor="#D7E7F6"
            onClick={() => openExternal('https://t.me/yourchannel')}
          >
            <Content>
              <div>
                <Title>Подписаться на Telegram-канал Лизы Васиной</Title>
                <Reward>Награда: x1 расклад Таро на выбор</Reward>
              </div>
              <ActionBtn $color="#4F93C9">Перейти к выполнению</ActionBtn>
            </Content>
          </BottomCard>

          <BottomCard
            $bg={igBg}
            $borderColor="#F3DDD1"
            onClick={() => openExternal('https://instagram.com/yourchannel')}
          >
            <Content>
              <div>
                <Title>Подписаться на Instagram Лизы Васиной</Title>
                <Reward>Награда: x1 расклад Таро на выбор</Reward>
              </div>
              <ActionBtn $color="#B08E7E">Перейти к выполнению</ActionBtn>
            </Content>
          </BottomCard>
        </BottomCards>
      </SoftBlock>
    </Page>
  );
};

export default Referral;
