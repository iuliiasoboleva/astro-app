import bagBg from '../assets/images/bag.png';
import batteryBg from '../assets/images/battery.png';
import buggyBg from '../assets/images/buggy.png';
import cardsBg from '../assets/images/cards.png';
import compassBg from '../assets/images/compass.png';
import financeBg from '../assets/images/finance.png';
import fiveStarBg from '../assets/images/five-star.png';
import fourStarBg from '../assets/images/four-star.png';
import girlBg from '../assets/images/girl.png';
import healthBg from '../assets/images/health.png';
import heartsBg from '../assets/images/hearts.png';
import lensBg from '../assets/images/lens.png';
import lightBg from '../assets/images/light.png';
import pathsBg from '../assets/images/paths.png';
import personBg from '../assets/images/person.png';
import sectorBg from '../assets/images/sector.png';
import starBg from '../assets/images/star.png';
import sunBg from '../assets/images/sun.png';

const raw = [
  {
    id: 1,
    title: 'Расклад\nна отношения',
    bg: heartsBg,
    free: true,
    subscription: false,
    purchased: false,
  },
  {
    id: 2,
    title: 'Расклад\nна выбор парня',
    bg: personBg,
    free: true,
    subscription: false,
    purchased: false,
  },
  {
    id: 3,
    title: 'Расклад\nна «Да/Нет»',
    bg: compassBg,
    free: false,
    subscription: false,
    purchased: false,
  },
  {
    id: 4,
    title: 'Расклад на выбор\n«Два пути»',
    bg: pathsBg,
    free: false,
    subscription: false,
    purchased: false,
  },
  {
    id: 5,
    title: 'Расклад\nна будущее',
    bg: starBg,
    free: false,
    subscription: false,
    purchased: true,
  },
  {
    id: 6,
    title: 'Расклад на работу\nи бизнес',
    bg: bagBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 7,
    title: 'Расклад\n«Совет от карт»',
    bg: cardsBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 8,
    title: 'Расклад\n«Колесо года»',
    bg: fiveStarBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 9,
    title: 'Расклад\nна духовный путь',
    bg: fourStarBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 10,
    title: 'Расклад\nна финансы',
    bg: financeBg,
    free: false,
    subscription: true,
    purchased: false,
  },
];

const computeStatus = (card) => {
  if (card.purchased) return 'purchased';
  if (card.free || card.subscription) return 'default';
  return 'locked';
};

const cards = raw.map((c) => ({ ...c, status: computeStatus(c) }));
export default cards;
