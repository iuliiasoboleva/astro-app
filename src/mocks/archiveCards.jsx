import astroIcon from '../assets/icons/stars-inactive.svg';
import tarotIcon from '../assets/icons/taro-inactive.svg';
import { astroCategoryById } from './astroCategories';
import { tarotCategoryById } from './tarotCategories';

const build = (kind, id, date, time) => {
  const src = (kind === 'tarot' ? tarotCategoryById : astroCategoryById)[String(id)];
  return {
    key: `${kind}-${id}-${date}-${time}`,
    id: src.id,
    title: src.title,
    bg: src.bg,
    category: kind, // 'tarot' | 'astro'
    date,
    time,
    pillText: kind === 'tarot' ? 'Расклад Таро' : 'Астрология',
    pillIcon: kind === 'tarot' ? tarotIcon : astroIcon,
  };
};

export const archiveTarot = [
  build('tarot', 3, '22 июля 2025 г.', '18:45'),
  build('tarot', 2, '22 июля 2025 г.', '18:45'),
  build('tarot', 3, '22 июля 2025 г.', '18:45'),
  build('tarot', 2, '22 июля 2025 г.', '18:45'),
].map((it, i) => ({
  ...it,
  question:
    i % 2
      ? 'Стоит ли мне возобновлять общение?'
      : 'Почему иногда так сложно бывает что-то делать, а ещё придумать описание в 2–3 строки?',
}));

export const archiveAstro = [
  {
    ...build('astro', 4, '23 июля 2025 г.', '11:12'),
    question: 'Какие у него сильные и слабые стороны?',
  },
  {
    ...build('astro', 8, '13 июня 2025 г.', '12:24'),
    question: 'Почему отношения с этим человеком такие сложные?',
  },
  {
    ...build('astro', 3, '22 июля 2025 г.', '18:45'),
    question: 'Какие перспективы у моего ребёнка?',
  },
];

export const archiveCardsByCategory = {
  tarot: archiveTarot,
  astro: archiveAstro,
};
