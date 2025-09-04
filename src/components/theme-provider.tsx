"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      // Ensure the theme provider doesn't cause hydration issues
      storageKey="abzu-theme"
    >
      {children}
    </NextThemesProvider>
  )
}
