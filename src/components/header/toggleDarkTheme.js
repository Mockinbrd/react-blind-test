import React from 'react';
import {ThemeContext} from "../../styles/themeContext";

export const ToggleDarkTheme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <label className="text-primary">
      <input
        type="checkbox"
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      Dark Mode
    </label>
  );
};
