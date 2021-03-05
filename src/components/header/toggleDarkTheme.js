import React from "react";
import { ThemeContext } from "../../styles/themeContext";
import Switch from "@material-ui/core/Switch";

export const ToggleDarkTheme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <div className="flex items-center text-white">
      <svg
        className="h-10"
        xmlns="http://www.w3.org/2000/svg"
        fill={isDark() ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      <Switch
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        name="switch"
        color="default"
      />
    </div>
  );
};
