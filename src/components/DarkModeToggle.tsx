'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

        if (shouldUseDark) {
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    }, [])

    const toggleDarkMode = () => {
        const html = document.documentElement
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDark(false)
        } else {
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setIsDark(true)
        }
    }

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
        >
            {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-800 dark:text-white" />}
        </button>
    )
}
