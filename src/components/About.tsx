'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CVModal from './CVModal'

export default function About() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <section id="about" className="bg-white dark:bg-slate-950 py-24 px-6">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        className="text-center md:text-left max-w-xl"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
                            Hi, I’m{' '}
                            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                                Upela Gajanayaka
                            </span>
                        </h2>

                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            A passionate <span className="font-semibold text-indigo-500">Software Engineering</span> student who loves creating clean, modern UIs and user-friendly experiences.
                        </p>

                        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                            Skilled in Next.js, TypeScript, and Tailwind CSS. I enjoy bringing ideas to life on the web.
                        </p>

                        {/* CV Buttons */}
                        <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
                            <a
                                href="/Upela_Gajanayaka_CV.pdf"
                                download
                                className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
                            >
                                Download CV
                            </a>

                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                            >
                                View CV
                            </button>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-64 h-64 relative rounded-3xl overflow-hidden shadow-xl border-4 border-indigo-500">
                            <Image
                                src="/images/T.png"
                                alt="Upela Gajanayaka"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {showModal && <CVModal onClose={() => setShowModal(false)} />}
        </>
    )
}
