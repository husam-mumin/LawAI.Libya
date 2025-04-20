"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full" variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all block dark:hidden dark:-rotate-90 dark:scale-0" />
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all hidden dark:block dark:rotate-0 dark:scale-100" />
          {theme} <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full" align="end">
        <DropdownMenuItem className="w-full" onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full" onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full" onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
