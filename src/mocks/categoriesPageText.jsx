import React from 'react';

import cardCircle from '../assets/images/card-circle.png';
import sadCircle from '../assets/images/sad-circle.png';

export const PAGE_COPY = {
  tarot: {
    topTitle: 'Расклад Таро',
    mainTitle: (
      <>
        Какой расклад Таро
        <br />
        хотите попробовать?
      </>
    ),
    empty: {
      subscription: {
        icon: sadCircle,
        title: 'У вас ещё нет подписки',
        subtitle:
          'Оформите подписку и получите полный доступ ко всем закрытым раскладам — без доплат и ограничений.',
        buttonLabel: 'Оформить подписку',
      },
      purchased: {
        icon: cardCircle,
        title: 'У вас пока нет купленных раскладов',
        subtitle:
          'Вы можете приобрести любой расклад отдельно — и пользоваться им без ограничений в любое время.',
        buttonLabel: 'Открыть магазин раскладов',
      },
    },
  },
  astro: {
    topTitle: 'Астрология',
    mainTitle: (
      <>
        Какой расклад Астро
        <br />
        хотите попробовать?
      </>
    ),
    empty: {
      subscription: {
        icon: sadCircle,
        title: 'У вас ещё нет подписки',
        subtitle:
          'Оформите подписку и получите полный доступ ко всем закрытым раскладам — без доплат и ограничений.',
        buttonLabel: 'Оформить подписку',
      },
      purchased: {
        icon: cardCircle,
        title: 'У вас пока нет купленных раскладов',
        subtitle:
          'Вы можете приобрести любой расклад отдельно — и пользоваться им без ограничений в любое время.',
        buttonLabel: 'Открыть магазин раскладов',
      },
    },
  },
};
