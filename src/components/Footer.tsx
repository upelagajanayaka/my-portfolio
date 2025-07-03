'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 mt-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Column 1: Branding */}
                <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Chad Giga</h4>
                    <p className="text-sm leading-relaxed">
                        Building beautiful, fast and accessible websites with love.
                    </p>
                </div>

                {/* Column 2: Links */}
                <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Links</h5>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="#about" className="hover:text-indigo-500">About</Link></li>
                        <li><Link href="#projects" className="hover:text-indigo-500">Projects</Link></li>
                        <li><Link href="#contact" className="hover:text-indigo-500">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Tech */}
                <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h5>
                    <ul className="space-y-1 text-sm">
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Resend API</li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Connect</h5>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <Mail size={16} /> <a href="mailto:your@email.com">your@email.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Github size={16} /> <a href="https://github.com/yourusername" target="_blank">GitHub</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Linkedin size={16} /> <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-xs mt-10 text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Chad Giga. All rights reserved.
            </div>
        </footer>
    )
}
