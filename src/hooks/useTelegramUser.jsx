import { useEffect, useMemo, useState } from 'react';

export default function useTelegramUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window?.Telegram?.WebApp;
    if (!tg) return;

    try {
      tg.ready();

      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        setUser(tg.initDataUnsafe.user);
      } else {
        console.warn('Telegram WebApp: user not found in initDataUnsafe');
      }
    } catch (e) {
      console.warn('Telegram WebApp user read error:', e);
    }
  }, []);

  return useMemo(() => {
    if (!user) return null;

    const { first_name, last_name, username, photo_url, is_premium, language_code, id } = user;

    return {
      id,
      name: [first_name, last_name].filter(Boolean).join(' ') || 'Пользователь',
      username: username ? `@${username}` : '',
      photoUrl: photo_url || '',
      isPremium: Boolean(is_premium),
      language: language_code || 'ru',
      raw: user,
    };
  }, [user]);
}
