import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

type ThemeState = {
  currentTheme: string;
};

const initialState = {
  currentTheme: "system",
} as ThemeState;

export const useTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => ({
      ...state,
      currentTheme: state.currentTheme === "light" ? "dark" : "light",
    }),
    setSystemPreference: (state) => ({ ...state, currentTheme: "system" }),
  },
});
export const { toggleTheme, setSystemPreference } = useTheme.actions;

export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState(getSystemTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return systemTheme;
};
const getSystemTheme = (): string => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};
