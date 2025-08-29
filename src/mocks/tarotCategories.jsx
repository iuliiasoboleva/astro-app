import adviceIcon from '../assets/images/resume/tarot/advice.png';
import boyfriendIcon from '../assets/images/resume/tarot/boyfriend.png';
import businessIcon from '../assets/images/resume/tarot/business.png';
import financeIcon from '../assets/images/resume/tarot/finance.png';
import futureIcon from '../assets/images/resume/tarot/future.png';
import relationshipIcon from '../assets/images/resume/tarot/relationship.png';
import twoPathsIcon from '../assets/images/resume/tarot/twopaths.png';
import wayIcon from '../assets/images/resume/tarot/way.png';
import wheelIcon from '../assets/images/resume/tarot/wheel.png';
import yesnoIcon from '../assets/images/resume/tarot/yesno.png';
import adviceBg from '../assets/images/templates/tarot/advice.png';
import boyfriendBg from '../assets/images/templates/tarot/boyfriend.png';
import businessBg from '../assets/images/templates/tarot/business.png';
import financeBg from '../assets/images/templates/tarot/finance.png';
import futureBg from '../assets/images/templates/tarot/future.png';
import relationshipBg from '../assets/images/templates/tarot/relationship.png';
import twoPathsBg from '../assets/images/templates/tarot/twopaths.png';
import wayBg from '../assets/images/templates/tarot/way.png';
import wheelBg from '../assets/images/templates/tarot/wheel.png';
import yesnoBg from '../assets/images/templates/tarot/yesno.png';

const raw = [
  {
    id: 1,
    title: 'Расклад\nна отношения',
    shortTitle: '«Отношения»',
    icon: relationshipIcon,
    bg: relationshipBg,
    free: true,
    subscription: false,
    purchased: false,
    count: 6,
    price: 990,
  },
  {
    id: 2,
    title: 'Расклад\nна выбор парня',
    shortTitle: '«Выбор парня»',
    icon: boyfriendIcon,
    bg: boyfriendBg,
    free: true,
    subscription: false,
    purchased: false,
    count: 7,
    price: 990,
  },
  {
    id: 3,
    title: 'Расклад\nна «Да/Нет»',
    shortTitle: '«Да/Нет»',
    icon: yesnoIcon,
    bg: yesnoBg,
    free: false,
    subscription: false,
    purchased: false,
    count: 3,
    price: 990,
  },
  {
    id: 4,
    title: 'Расклад на выбор\n«Два пути»',
    shortTitle: '«Два пути»',
    icon: twoPathsIcon,
    bg: twoPathsBg,
    free: false,
    subscription: false,
    purchased: false,
    count: 7,
    price: 990,
  },
  {
    id: 5,
    title: 'Расклад\nна будущее',
    shortTitle: '«Будущее»',
    icon: futureIcon,
    bg: futureBg,
    free: false,
    subscription: false,
    purchased: true,
    count: 5,
    price: 990,
  },
  {
    id: 6,
    title: 'Расклад на работу\nи бизнес',
    shortTitle: '«Работа и бизнес»',
    icon: businessIcon,
    bg: businessBg,
    free: false,
    subscription: true,
    purchased: false,
    count: 5,
    price: 990,
  },
  {
    id: 7,
    title: 'Расклад\n«Совет от карт»',
    shortTitle: '«Совет от карт»',
    icon: adviceIcon,
    bg: adviceBg,
    free: false,
    subscription: true,
    purchased: false,
    count: 3,
    price: 990,
  },
  {
    id: 8,
    title: 'Расклад\n«Колесо года»',
    shortTitle: '«Колесо года»',
    icon: wheelIcon,
    bg: wheelBg,
    free: false,
    subscription: true,
    purchased: false,
    count: 13,
    price: 990,
  },
  {
    id: 9,
    title: 'Расклад\nна духовный путь',
    shortTitle: '«Духовный путь»',
    icon: wayIcon,
    bg: wayBg,
    free: false,
    subscription: true,
    purchased: false,
    count: 5,
    price: 990,
  },
  {
    id: 10,
    title: 'Расклад\nна финансы',
    shortTitle: '«Финансы»',
    icon: financeIcon,
    bg: financeBg,
    free: false,
    subscription: true,
    purchased: false,
    count: 5,
    price: 990,
  },
];

const computeStatus = (card) =>
  card.purchased ? 'purchased' : card.free || card.subscription ? 'default' : 'locked';

export const tarotCategories = raw.map((c) => ({ ...c, status: computeStatus(c) }));
export const tarotCategoryById = Object.fromEntries(tarotCategories.map((c) => [String(c.id), c]));
export default tarotCategories;
