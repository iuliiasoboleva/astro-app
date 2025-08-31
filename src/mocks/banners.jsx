import accessBg from '../assets/banners/access.png';
import activatedBg from '../assets/banners/activated.png';
import birthdayBg from '../assets/banners/birthday.png';
import cardsBg from '../assets/banners/cards.png';
import chanceBg from '../assets/banners/chance.png';
import discountBg from '../assets/banners/discount.png';
import freeBg from '../assets/banners/free.png';
import infoBg from '../assets/banners/info.png';
import spreadBg from '../assets/banners/spread.png';
import subscribedBg from '../assets/banners/subscribed.png';
import subscriptionBg from '../assets/banners/subscription.png';
import successBg from '../assets/banners/success.png';
import tryBg from '../assets/banners/try.png';
import zeroBg from '../assets/banners/zero.png';

export const BANNERS = {
  discount: {
    title: 'Скидка -33%',
    text: 'Полный доступ ко всем Таро\n и Астро-раскладам за 590 ₽.\n Затем 990 ₽ в месяц.',
    cta: 'Оформить',
    bg: discountBg,
    styles: {
      titleColor: '#1F3541',
      textColor: '#546E7D',
      buttonColor: '#4F93C9',
      crossColor: '#546E7D',
    },
  },
  subscription: {
    title: 'Подписка за 990 ₽',
    text: 'Всё, чтобы услышать себя.\n Расклады, подсказки, астрология\n со скидкой -33%',
    cta: 'Оформить',
    bg: subscriptionBg,
    styles: {
      titleColor: '#1F3541',
      textColor: '#546E7D',
      buttonColor: '#4F93C9',
      crossColor: '#546E7D',
    },
  },
  access: {
    title: 'Доступ ко всем раскладам',
    text: 'Только в первый месяц\n — не упусти свой шанс.',
    cta: 'Подробнее',
    bg: accessBg,
    styles: {
      titleColor: '#3C3877',
      textColor: '#7571BB',
      buttonColor: '#7571BB',
      crossColor: '#7571BB',
    },
  },
  info: {
    title: 'Не знаешь, как поступить?',
    text: 'Точный расклад по твоему\n вопросу — за 990 ₽.',
    cta: 'Узнать',
    bg: infoBg,
    styles: {
      titleColor: '#753B1E',
      textColor: '#7E6559',
      buttonColor: '#B08E7E',
      crossColor: '#7E6559',
    },
  },
  cards: {
    title: 'Что скажут карты?',
    text: 'Расклад от 990 ₽\n — ответ уже рядом.',
    cta: 'Получить ответ',
    bg: cardsBg,
    styles: {
      titleColor: '#3C3877',
      textColor: '#7571BB',
      buttonColor: '#7571BB',
      crossColor: '#7571BB',
    },
  },
  spread: {
    title: 'Один расклад за 990 ₽',
    text: 'Или все расклады\n — за 990 ₽ в месяц.\n Выбор за тобой!',
    cta: 'Подробнее',
    bg: spreadBg,
    styles: {
      titleColor: '#753B1E',
      textColor: '#7E6559',
      buttonColor: '#B08E7E',
      crossColor: '#7E6559',
    },
  },
  chance: {
    title: 'Не упустите шанс задать\n волнующий вопрос.',
    text: 'Узнайте, что скажут карты!',
    cta: 'Задать вопрос',
    bg: chanceBg,
    styles: {
      titleColor: '#753B1E',
      textColor: '#7E6559',
      buttonColor: '#B08E7E',
      crossColor: '#7E6559',
    },
  },
  zero: {
    title: 'Расклады за 0₽',
    text: 'Выполняй простые задания\n и приглашай друзей',
    cta: 'Попробовать',
    bg: zeroBg,
    styles: {
      titleColor: '#3C3877',
      textColor: '#7571BB',
      buttonColor: '#7571BB',
      crossColor: '#7571BB',
    },
  },
  try: {
    title: 'Попробовать за 590 ₽',
    text: 'Доступ ко всем раскладам\n на первый месяц. Далее —\n также 990₽ в месяц.',
    cta: 'Подробнее',
    bg: tryBg,
    styles: {
      titleColor: '#753B1E',
      textColor: '#7E6559',
      buttonColor: '#B08E7E',
      crossColor: '#7E6559',
    },
  },
  birthday: {
    title: 'День рождения у Лизы\n — а подарок тебе!',
    text: 'Промокод дарит 1\n бесплатный расклад',
    cta: 'Получить подарок',
    bg: birthdayBg,
    styles: {
      titleColor: '#753B1E',
      textColor: '#7E6559',
      buttonColor: '#B08E7E',
      crossColor: '#7E6559',
    },
  },
  free: {
    title: 'Вас ждёт\n бесплатный расклад',
    text: 'Самое время\n воспользоваться им!',
    cta: 'Получить ответ',
    bg: freeBg,
    styles: {
      titleColor: '#3C3877',
      textColor: '#7571BB',
      buttonColor: '#7571BB',
      crossColor: '#7571BB',
    },
  },
  activated: {
    title: 'Промокод активирован!',
    text: 'Бесплатный расклад зачислен\n — доверься картам и задай\n свой вопрос.',
    cta: 'Задать вопрос',
    bg: activatedBg,
    styles: {
      titleColor: '#1E7532',
      textColor: '#5B7E59',
      buttonColor: '#7EB089',
      crossColor: '#5B7E59',
    },
  },
  success: {
    title: 'Оплата прошла успешно!',
    text: 'Ваш расклад разблокирован\n — задайте вопрос и начнём!',
    cta: 'Задать вопрос',
    bg: successBg,
    styles: {
      titleColor: '#1E7532',
      textColor: '#5B7E59',
      buttonColor: '#7EB089',
      crossColor: '#5B7E59',
    },
  },
  subscribed: {
    title: 'Подписка успешно\n активирована!',
    text: 'Давайте узнаем,\nчто скажут карты?',
    cta: 'Задать вопрос',
    bg: subscribedBg,
    styles: {
      titleColor: '#1E7532',
      textColor: '#5B7E59',
      buttonColor: '#7EB089',
      crossColor: '#5B7E59',
    },
  },
};
