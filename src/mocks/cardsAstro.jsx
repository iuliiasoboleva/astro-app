import boyfriendIcon from '../assets/images/resume/astro/boyfriend.png';
import childIcon from '../assets/images/resume/astro/child.png';
import energyIcon from '../assets/images/resume/astro/energy.png';
import financeIcon from '../assets/images/resume/astro/finance.png';
import fullIcon from '../assets/images/resume/astro/full.png';
import healthIcon from '../assets/images/resume/astro/health.png';
import karmaIcon from '../assets/images/resume/astro/karma.png';
import lookIcon from '../assets/images/resume/astro/look.png';
import relationshipIcon from '../assets/images/resume/astro/relationship.png';
import sourceIcon from '../assets/images/resume/astro/source.png';
import womanIcon from '../assets/images/resume/astro/woman.png';
import boyfriendBg from '../assets/images/templates/astro/boyfriend.png';
import childBg from '../assets/images/templates/astro/child.png';
import energyBg from '../assets/images/templates/astro/energy.png';
import financeBg from '../assets/images/templates/astro/finance.png';
import fullBg from '../assets/images/templates/astro/full.png';
import healthBg from '../assets/images/templates/astro/health.png';
import karmaBg from '../assets/images/templates/astro/karma.png';
import lookBg from '../assets/images/templates/astro/look.png';
import relationshipBg from '../assets/images/templates/astro/relationship.png';
import sourceBg from '../assets/images/templates/astro/source.png';
import womanBg from '../assets/images/templates/astro/woman.png';

const raw = [
  {
    id: 1,
    title: 'Финансы\nи цели',
    icon: financeIcon,
    bg: financeBg,
    free: true,
    subscription: false,
    purchased: false,
    count: 5,
  },
  {
    id: 2,
    title: 'Здоровье\nи спорт',
    icon: healthIcon,
    bg: healthBg,
    free: true,
    subscription: false,
    purchased: false,
    count: 3,
  },
  {
    id: 3,
    title: 'Карта вашего\nребенка',
    icon: childIcon,
    bg: childBg,
    free: false,
    subscription: false,
    purchased: false,
  },
  {
    id: 4,
    title: 'Анализ\nмужчины',
    icon: boyfriendIcon,
    bg: boyfriendBg,
    free: false,
    subscription: false,
    purchased: false,
  },
  {
    id: 5,
    title: 'Рассчет натальной\nкарты целиком',
    icon: fullIcon,
    bg: fullBg,
    free: false,
    subscription: false,
    purchased: true,
  },
  {
    id: 6,
    title: 'Совместимость',
    icon: relationshipIcon,
    bg: relationshipBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 7,
    title: 'Женская\nэнергия',
    icon: energyIcon,
    bg: energyBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 8,
    title: 'Женский разбор\nпро отношения',
    icon: womanIcon,
    bg: womanBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 9,
    title: 'Кармические\nзадачи',
    icon: karmaIcon,
    bg: karmaBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 10,
    title: 'Внешность',
    icon: lookIcon,
    bg: lookBg,
    free: false,
    subscription: true,
    purchased: false,
  },
  {
    id: 11,
    title: 'Ваш источник\nэнергии и ресурса',
    icon: sourceIcon,
    bg: sourceBg,
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
