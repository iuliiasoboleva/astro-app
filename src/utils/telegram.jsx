export const openExternal = (href) => {
  const tg = window?.Telegram?.WebApp;
  if (!tg) {
    window.open(href, '_blank', 'noopener,noreferrer');
    return;
  }

  // Если это ссылка на Telegram (t.me / tg://)
  if (/^(https?:\/\/t\.me\/|tg:\/\/)/i.test(href)) {
    tg.openTelegramLink(href);
    return;
  }

  // Любая другая внешняя ссылка
  tg.openLink(href);
};
