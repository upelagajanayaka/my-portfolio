'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import clsx from 'clsx'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    // Load dark mode from localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            document.documentElement.classList.add('dark')
            setDarkMode(true)
        }
    }, [])

    const toggleDarkMode = () => {
        const isDark = !darkMode
        setDarkMode(isDark)
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', isDark)
    }

    const navItems = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Tech', href: '#tech' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    UjelaDev<span className="text-gray-900 dark:text-white">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:scale-105 transition"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex gap-2 items-center">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        className="text-gray-700 dark:text-gray-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={clsx(
                    'md:hidden px-6 pb-4 pt-2 space-y-2 transition-all duration-300',
                    isOpen ? 'block' : 'hidden'
                )}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </header>
    )
}
