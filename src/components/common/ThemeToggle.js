import React from "react";
import { useTheme } from "next-themes";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "light" ? (
        <div onClick={() => setTheme("dark")}>
          <DarkModeRoundedIcon />
        </div>
      ) : (
        <div onClick={() => setTheme("light")}>
          <LightModeRoundedIcon />
        </div>
      )}
    </>
  );
};

export default Button;
