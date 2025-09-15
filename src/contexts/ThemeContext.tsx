'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  resetTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Force light theme on initial load
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add('light')
    
    // Only check localStorage after component mounts
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme)
    } else {
      setTheme('light') // Always default to light
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    // Only update DOM after initialization
    if (isInitialized) {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
      console.log('Theme changed to:', theme) // Debug log
    }
  }, [theme, isInitialized])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const resetTheme = () => {
    localStorage.removeItem('theme')
    setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
