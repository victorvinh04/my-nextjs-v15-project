"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoids hydration mismatch on SSR
  }

  return (
    <Button
      className="flex items-center justify-center text-black dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 md:h-6 md:w-6" />
      ) : (
        <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:block md:h-6 md:w-6-rotate-90 dark:scale-0" />
      )}
    </Button>
  );
}
