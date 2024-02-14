import React from "react";
import "./DarkModeToggle.css";
import { useColorScheme } from "../hooks/useColorScheme";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className="toggle-container">
      <label className="checkmark-container">
        Dark
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => {setIsDark(dark => !dark)}}
        />
        <span className="checkmark"></span>
      </label>
      <label className="checkmark-container">
        Light
        <input
          type="checkbox"
          checked={!isDark}
          onChange={() => {setIsDark(dark => !dark)}}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};