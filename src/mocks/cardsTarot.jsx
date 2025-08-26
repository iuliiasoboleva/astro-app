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
    icon: relationshipIcon,
    bg: relationshipBg,
    free: true,
    subscription: false,
    purchased: false,
    count: 5,
  },
  {
    id: 2,
    title: 'Расклад\nна выбор парня',
    icon: boyfriendIcon,
    bg: boyfriendBg,
    free: true,
    subscription: false,
    purchased: false,
    count: 3,
  },
  {
    id: 3,
    title: 'Расклад\nна «Да/Нет»',
    icon: yesnoIcon,
    bg: yesnoBg,
    free: false,
    subscription: false,
    purchased: false,
  },
  {
    id: 4,
    title: 'Расклад на выбор\n«Два пути»',
    icon: twoPathsIcon,
    bg: twoPathsBg,
    free: false,
    subscription: false,
    purchased: false,
  },
  {
    id: 5,
    title: 'Расклад\nна будущее',
    icon: futureIcon,
    bg: futureBg,
    free: false,
    subscription: false,
    purchased: true,
  },
  {
    id: 6,
    title: 'Расклад на работу\nи бизнес',
    icon: businessIcon,
    bg: businessBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 7,
    title: 'Расклад\n«Совет от карт»',
    icon: adviceIcon,
    bg: adviceBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 8,
    title: 'Расклад\n«Колесо года»',
    icon: wheelIcon,
    bg: wheelBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 9,
    title: 'Расклад\nна духовный путь',
    icon: wayIcon,
    bg: wayBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 10,
    title: 'Расклад\nна финансы',
    icon: financeIcon,
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
