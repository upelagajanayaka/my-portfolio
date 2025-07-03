'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function ProjectModal({
    project,
    onClose,
}: {
    project: {
        title: string
        image: string
        description: string
        details?: string
        link?: string
    }
    onClose: () => void
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white dark:bg-gray-900 max-w-3xl w-full rounded-xl p-6 shadow-xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 z-10"
                >
                    <X size={22} />
                </button>

                <div className="mb-4 relative h-48 w-full rounded-md overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                {project.details && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.details}</p>
                )}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    >
                        Visit Project →
                    </a>
                )}
            </motion.div>
        </div>
    )
}
