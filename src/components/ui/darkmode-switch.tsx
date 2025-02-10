"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DarkmodeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <button
      onClick={() =>
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      {theme === "dark" ? (
        <SunIcon strokeWidth={1.5} />
      ) : (
        <MoonIcon strokeWidth={1.5} />
      )}
    </button>
  );
};
