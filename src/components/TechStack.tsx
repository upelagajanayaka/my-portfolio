'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiReact,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiFigma,
} from 'react-icons/si'

const techs = [
    { name: 'React', icon: <SiReact />, category: 'frontend', color: 'text-sky-500' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend', color: 'text-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend', color: 'text-black dark:text-white' },
    { name: 'Node.js', icon: <SiNodedotjs />, category: 'backend', color: 'text-green-600' },
    { name: 'Git', icon: <SiGit />, category: 'tooling', color: 'text-orange-500' },
    { name: 'GitHub', icon: <SiGithub />, category: 'tooling', color: 'text-gray-800 dark:text-white' },
    { name: 'Figma', icon: <SiFigma />, category: 'tooling', color: 'text-pink-500' },
]

const categories = ['all', 'frontend', 'backend', 'tooling']

export default function TechStack() {
    const [filter, setFilter] = useState('all')
    const filteredTechs = filter === 'all' ? techs : techs.filter(t => t.category === filter)

    return (
        <section id="tech" className="py-24 bg-gray-100 dark:bg-slate-950 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Tech Stack</h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`capitalize px-4 py-1 rounded-full font-medium border transition ${filter === cat
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center"
                >
                    <AnimatePresence>
                        {filteredTechs.map(({ name, icon, color }, i) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="relative group bg-white/30 dark:bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer w-32 h-32 flex flex-col items-center justify-center"
                            >
                                <div className={`text-4xl ${color}`}>{icon}</div>
                                <div className="mt-3 text-sm font-medium text-gray-800 dark:text-white opacity-80 group-hover:opacity-100 transition">
                                    {name}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
