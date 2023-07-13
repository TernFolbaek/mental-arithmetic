import React, { useState, useEffect } from 'react';
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
import Icon from '@mdi/react';

export const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.theme);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const switchTheme = () => {
    if (theme === 'dark') {
      localStorage.theme = 'light';
      setTheme('light');
    } else {
      localStorage.theme = 'dark';
      setTheme('dark');
    }
  };

  return (
    <div
      className="bg-gray-800 dark:bg-white p-2 rounded-md cursor-pointer"
      onClick={switchTheme}
    >
      {theme === 'dark' ? (
        <Icon path={mdiWeatherNight} size={1} />
      ) : (
        <Icon path={mdiWeatherSunny} size={1} />
      )}
    </div>
  );
};
