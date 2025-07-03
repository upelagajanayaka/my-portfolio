'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-md' : 'bg-transparent'
                } backdrop-blur-md`}
        >
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-white">
                    Upela<span className="text-indigo-500">Dev</span>
                </Link>


                <ul className="hidden md:flex space-x-6 text-white font-medium">
                    <li><Link href="#about" className="hover:text-indigo-400">About</Link></li>
                    <li><Link href="#projects" className="hover:text-indigo-400">Projects</Link></li>
                    <li><Link href="#contact" scroll={false} className="hover:text-indigo-500 transition">
                        Contact
                    </Link>
                    </li>
                    <div className="flex items-center gap-6">
                        {/* Add nav links here if needed */}
                        <DarkModeToggle />
                    </div>
                </ul>

                <button onClick={toggleMenu} className="md:hidden text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {isOpen && (
                <div className="md:hidden px-6 pb-4 text-white bg-black">
                    <ul className="flex flex-col space-y-4 font-medium">
                        <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
                        <li><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
                        <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    )
}
