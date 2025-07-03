'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ProjectModal from './ProjectModal'

const categories = ['All', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AI', 'Firebase', 'YouTube']

const projects = [
    {
        title: 'Student Paper Sharing App',
        image: '/images/project1.jpg',
        description: 'Upload, download, and rate student papers with auth and cloud support.',
        details: 'Built with Firebase, Tailwind CSS, and Next.js. Includes real-time uploads.',
        tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
        link: '#',
    },
    {
        title: 'Dark Depths YouTube Automation',
        image: '/images/project3.jpg',
        description: 'Scalable content production for horror storytelling using AI tools.',
        details: 'YouTube automation using CapCut + ElevenLabs + D-ID.',
        tags: ['AI', 'YouTube'],
        link: '#',
    },
    {
        title: 'Portfolio Website',
        image: '/images/project2.jpg',
        description: 'A dark/light portfolio built with modern tech stack.',
        details: 'Includes Framer Motion, dark mode toggle, and smooth UI components.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        link: '#',
    },
]

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [selectedProject, setSelectedProject] = useState<any>(null)

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.tags.includes(activeCategory))

    return (
        <section id="projects" className="py-24 bg-gray-100 dark:bg-gray-950 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
                    My Projects
                </h2>

                {/* Category Tabs */}
                <div className="relative w-full overflow-x-auto mb-10">
                    <div className="flex gap-6 justify-center text-sm font-medium text-gray-600 dark:text-gray-300">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="relative px-1 pb-2"
                            >
                                <span
                                    className={`transition-colors ${activeCategory === cat
                                            ? 'text-indigo-600 dark:text-indigo-400'
                                            : ''
                                        }`}
                                >
                                    {cat}
                                </span>

                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Cards */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition"
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-indigo-100 dark:bg-indigo-800/30 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    )
}
