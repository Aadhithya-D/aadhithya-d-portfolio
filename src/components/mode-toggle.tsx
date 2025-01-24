"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="shrink-0 flex flex-nowrap items-center justify-center rounded-lg p-2 transition-all
               h-9 w-9
               border-2 border-transparent
               bg-neutral-100 hover:border-neutral-300
               dark:bg-neutral-800 dark:hover:border-neutral-500
               text-neutral-900 hover:text-neutral-900
               dark:text-neutral-100 dark:hover:text-neutral-100
               hover:scale-[1.02]"
aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
