import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';
import cancelIcon from '../../assets/images/cancel.png';
import BottomSheet from '../../components/BottomSheet';
import InfoCard from '../../components/InfoCard';
import Plan from '../../components/Plan';
import { plans } from '../../mocks/tariffs';
import { CancelText, Page, SoftBlock, TitleBlock, TopTitle } from './styles';

const Subscription = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Page>
        <TitleBlock>
          <img src={arrowBack} alt="Назад" onClick={handleBack} style={{ cursor: 'pointer' }} />
          <TopTitle>Оформление подписки</TopTitle>
        </TitleBlock>

        <SoftBlock>
          {plans.map((p) => (
            <Plan
              key={p.id}
              price={p.price}
              period={p.period}
              badge={p.badge}
              features={p.features}
              buttonLabel={'Приобрести'}
              onClick={() => {}}
            />
          ))}
          <CancelText onClick={() => setOpen(true)}>Отменить подписку</CancelText>
        </SoftBlock>
      </Page>

      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        height="auto"
        maxHeight="80vh"
        ariaLabel="Оформление подписки"
      >
        <InfoCard
          icon={cancelIcon}
          title="Точно хотите отменить подписку?"
          subtitle={`Сейчас вы платите 990₽ в месяц.\nПосле отмены, при повторной активации стоимость составит 1490₽ в месяц.
\n\nВы всё ещё можете пользоваться подпиской\nдо конца оплаченного периода.`}
          buttonLabel="Оставить подписку"
          cancelLabel="Отменить всё равно"
          onButtonClick={() => {
            setOpen(false);
          }}
          onCancelClick={() => {
            setOpen(false);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default Subscription;
