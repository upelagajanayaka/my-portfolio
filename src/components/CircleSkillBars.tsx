'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
    { name: 'TypeScript', level: 90, color: '#38bdf8' },
    { name: 'React', level: 85, color: '#38bdf8' },
    { name: 'Next.js', level: 80, color: '#38bdf8' },
    { name: 'Tailwind CSS', level: 85, color: '#38bdf8' },
    { name: 'Node.js', level: 75, color: '#38bdf8' },
]

export default function CircleSkillBars() {
    return (
        <section id="skills" className="bg-gray-100 dark:bg-gray-950 py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
                    Skill Progress
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
                    {skills.map((skill) => (
                        <AnimatedCircle key={skill.name} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function AnimatedCircle({
    name,
    level,
    color,
}: {
    name: string
    level: number
    color: string
}) {
    const radius = 45
    const circumference = 2 * Math.PI * radius
    const offset = circumference * (1 - level / 100)

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const [currentValue, setCurrentValue] = useState(0)

    useEffect(() => {
        if (inView) {
            setCurrentValue(level)
        }
    }, [inView, level])

    return (
        <div ref={ref} className="relative w-32 h-32 sm:w-36 sm:h-36">
            <svg className="w-full h-full">
                <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="transparent"
                    stroke="#e5e7eb"
                    strokeWidth={10}
                />
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={10}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
            </svg>

            <motion.div className="absolute inset-0 flex items-center justify-center text-center">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {currentValue}%
                </span>
            </motion.div>

            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 text-center font-medium">
                {name}
            </div>
        </div>
    )
}

