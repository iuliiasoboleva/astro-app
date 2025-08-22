import bgFinance from '../assets/images/finance.png';

const cards = [
  {
    id: 1,
    title: 'Здоровье\nи спорт',
    bg: bgFinance,
    status: 'default',
    onClick: () => console.log('Default clicked'),
  },
  {
    id: 2,
    title: 'Здоровье\nи спорт',
    bg: bgFinance,
    status: 'locked',
  },
  {
    id: 3,
    title: 'Здоровье\nи спорт',
    bg: bgFinance,
    status: 'purchased',
    onClick: () => console.log('Purchased clicked'),
  },
];

export default cards;
